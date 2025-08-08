// src/app.ts
import express from 'express';
import userRoutes from './routes/user.routes';
import { json } from 'body-parser';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;
