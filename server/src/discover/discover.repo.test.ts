import { createDiscoverRepo } from "./discover.repo.js";
import { describe, it, expect, beforeEach } from 'vitest';
import { createDatabase } from "../db/database.js";
import { seedDatabase } from "../db/database.js";

describe("discover repo", () => {
    let repo: ReturnType<typeof createDiscoverRepo>;

    beforeEach(() => {
        const db = createDatabase(":memory:");
        seedDatabase(db, false);
        repo = createDiscoverRepo(db);
    });

    it('matches when the admirer already liked me', () => {
        expect(repo.recordSwipe('user_1', 'LIKE')?.isMatch).toBe(true);
    });

    it('does not match when they never liked me', () => {
        expect(repo.recordSwipe('user_3', 'LIKE')?.isMatch).toBe(false);
    });

    it('PASS then LIKE is not a match', () => {
        repo.recordSwipe('user_1', 'PASS');
        expect(repo.recordSwipe('user_1', 'LIKE')?.isMatch).toBe(false);
    });

    it('removes a swiped profile from the feed', () => {
        repo.recordSwipe('user_1', 'PASS');
        const ids = repo.getFeed().map(p => p.id);
        expect(ids).not.toContain('user_1');
    });

    it('getMatches returns only mutual likes', () => {
        repo.recordSwipe('user_1', 'LIKE');
        repo.recordSwipe('user_3', 'LIKE');
        const ids = repo.getMatches().map(p => p.id);
        expect(ids).toEqual(['user_1']);
    });
})