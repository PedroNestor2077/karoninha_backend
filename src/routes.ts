import express, { Router } from 'express';
import Middleware from './middleware';
import PingController from './controllers/PingController';
const router = Router();

router.get(
  '/karoninha/ping',
  (request: express.Request, response: express.Response) =>
    Middleware(request, response, PingController)
);

export default router;
