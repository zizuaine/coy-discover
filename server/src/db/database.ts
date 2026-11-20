import Database from "better-sqlite3";
import path from "path";
import { CURRENT_USER_ID, SEED_PROFILES, SEED_ADMIRER_IDS } from "./seedData.js";

export const createDatabase = (dbPath?: string): Database.Database => {
    const resolvedPath = dbPath ?? path.join(__dirname, "..", "..", "discover.sqlite");
    const db = new Database(resolvedPath);

    const query = `
        CREATE TABLE IF NOT EXISTS profiles (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            photo_url TEXT NOT NULL, 
            bio TEXT NOT NULL,
            location TEXT NOT NULL,
            interests TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS swipes (
            swiper_id TEXT NOT NULL,
            target_id TEXT NOT NULL,
            direction TEXT NOT NULL CHECK (direction IN ('LIKE', 'PASS')),
            created_at INTEGER NOT NULL,
            PRIMARY KEY (swiper_id, target_id)
    );
    `
    db.exec(query);
    return db;
}

export const seedDatabase = (db: Database.Database, forcedReset: boolean) => {
    if (forcedReset) {
        db.exec("DELETE FROM swipes; DELETE FROM profiles")
    };

    const rows = db.prepare("SELECT COUNT(*) as count FROM profiles")
        .get() as { count: number }
    if (rows.count > 0) return;

    const insertProfile = db.prepare(` 
        INSERT INTO profiles (id, name, age, photo_url, bio, location, interests)
        VALUES (@id, @name, @age, @photoUrl, @bio, @location, @interests)
    `)

    const insertSwipe = db.prepare(`
        INSERT INTO swipes (swiper_id, target_id, direction, created_at)
        VALUES (?, ?, 'LIKE', ?)
    `);

    const seedData = db.transaction(() => {
        for (const profile of SEED_PROFILES) {
            insertProfile.run({
                id: profile.id,
                name: profile.name,
                age: profile.age,
                photoUrl: profile.photoUrl,
                bio: profile.bio,
                location: profile.location,
                interests: JSON.stringify(profile.interests),
            });
        }

        const now = Date.now();
        for (const admirerId of SEED_ADMIRER_IDS) {
            insertSwipe.run(admirerId, CURRENT_USER_ID, now);
        }
    })

    seedData();
}

