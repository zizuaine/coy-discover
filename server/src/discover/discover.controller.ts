import type { Request, Response } from "express";
import type { createDiscoverRepo } from "./discover.repo.js";

type Repo = ReturnType<typeof createDiscoverRepo>

export const createDiscoverController = (repo: Repo) => ({
    getFeed(req: Request, res: Response) {
        res.json({ profiles: repo.getFeed() });
    },

    postSwipe(req: Request, res: Response) {
        const { direction, targetId } = req.body;
        if (!['LIKE', 'PASS'].includes(direction)) {
            return res.status(400).json({ error: 'Invalid direction' });
        }
        if (typeof targetId !== 'string') {
            return res.status(400).json({ error: 'targetId must be a string' });
        }

        const result = repo.recordSwipe(targetId, direction);
        if (!result) {
            return res.status(404).json({ error: 'profile not found' });
        }
        res.json(result);
    },

    getMatches(req: Request, res: Response) {
        res.json({ matches: repo.getMatches() });
    },
}) 