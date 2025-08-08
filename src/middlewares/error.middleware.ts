// src/middlewares/error.middleware.ts
import { Request, Response } from 'express';

export const errorHandler = (err: any, req: Request, res: Response) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
};
