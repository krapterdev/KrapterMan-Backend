// src/index.ts

import { Hono } from 'hono'
import app from './app';

const app = new Hono()

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});

export default app

