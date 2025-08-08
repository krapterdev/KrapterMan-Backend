import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// ✅ Enable CORS for all origins
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;
