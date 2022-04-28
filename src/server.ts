import express from 'express';
import Router from './routes';

const app: express.Application = express();
app.use(express.json());
app.use(Router);

export default app;
