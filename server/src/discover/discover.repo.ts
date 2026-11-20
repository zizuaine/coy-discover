import type { Database } from "better-sqlite3";
import type { Profile } from "../db/seedData.js";
import { CURRENT_USER_ID } from "../db/seedData.js";

const toProfile = (r: any) => ({
    id: r.id, name: r.name, age: r.age, photoUrl: r.photo_url,
    bio: r.bio, location: r.location, interests: JSON.parse(r.interests),
});

export const createDiscoverRepo = (db: Database) => {

    return {
        getFeed(): Profile[] {
            const rows = db.prepare(`
                SELECT * FROM profiles
                WHERE id != ? AND id NOT IN (
                    SELECT target_id from swipes
                    WHERE swiper_id = ?
                )
                ORDER BY rowid ASC
            `).all(CURRENT_USER_ID, CURRENT_USER_ID);

            return rows.map(toProfile)
        },

        recordSwipe(targetId: string, direction: 'LIKE' | 'PASS') {
            const target = db.prepare(`SELECT * FROM profiles WHERE id = ?`).get(targetId);
            if (!target) return null;

            const executeSwipe = db.transaction(() => {
                db.prepare(`
                    INSERT OR IGNORE INTO swipes (swiper_id, target_id, direction, created_at)
                    VALUES (?, ?, ?, ?)
                `).run(CURRENT_USER_ID, targetId, direction, Date.now());

                const stored = db.prepare(`
                        SELECT direction FROM swipes
                        WHERE swiper_id = ? AND target_id = ?
                `).get(CURRENT_USER_ID, targetId) as { direction: string };

                if (stored.direction === "PASS") {
                    return { isMatch: false }
                }

                const mutualLike = db.prepare(`
                    SELECT 1 FROM swipes
                    WHERE swiper_id = ? AND target_id = ? AND direction = 'LIKE'
                `).get(targetId, CURRENT_USER_ID);

                if (mutualLike) {
                    return {
                        isMatch: true,
                        matchedProfile: toProfile(target),
                    };
                }

                return { isMatch: false };
            });

            return executeSwipe();
        },

        getMatches(): Profile[] {
            const rows = db.prepare(`
                SELECT p.id, p.name, p.age, p.photo_url, p.bio, p.location, p.interests
                FROM profiles p
                INNER JOIN swipes s1
                    ON s1.target_id = p.id AND s1.swiper_id = ? AND s1.direction = 'LIKE'
                INNER JOIN swipes s2
                    ON s2.swiper_id = p.id AND s2.target_id = ? AND s2.direction = 'LIKE'
                ORDER BY s1.created_at DESC
            `).all(CURRENT_USER_ID, CURRENT_USER_ID);

            return rows.map(toProfile);
        },

    }
}
