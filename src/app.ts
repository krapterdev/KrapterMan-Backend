import { Hono } from 'hono';
import { db } from './db/client';
import { users } from './db/schema';

const app = new Hono();

app.get('/', (c) => c.text('Hello from Hono!'));

app.get('/users', async (c) => {
  const allUsers = await db.select().from(users);
  return c.json(allUsers);
});

export default app;
