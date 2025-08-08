import app from './app'
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

Bun.serve({
  port,
  fetch: app.fetch,
});

console.log(`🚀 Server running at http://localhost:${port}`);
