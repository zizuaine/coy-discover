import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import { createDatabase, seedDatabase } from './db/database.js';
import { createDiscoverRepo } from './discover/discover.repo.js';
import { createDiscoverController } from './discover/discover.controller.js';
import { createDiscoverRoutes } from './discover/discover.routes.js';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/swipe', rateLimit({
    windowMs: 60 * 1000,
    limit: 100,
    message: { error: 'Too many swipes, slow down.' },
}));

const db = createDatabase('discover.sqlite');
seedDatabase(db, true);
const repo = createDiscoverRepo(db);
const controller = createDiscoverController(repo);
app.use(createDiscoverRoutes(controller));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log('Server on http://localhost:3000'));