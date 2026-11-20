import { Router } from 'express';
import type { createDiscoverController } from "./discover.controller.js"

export const createDiscoverRoutes = (controller: ReturnType<typeof createDiscoverController>) => {

    const discoverRouter = Router();
    discoverRouter.get('/feed', controller.getFeed);
    discoverRouter.post('/swipe', controller.postSwipe);
    discoverRouter.get('/matches', controller.getMatches);

    return discoverRouter;
};