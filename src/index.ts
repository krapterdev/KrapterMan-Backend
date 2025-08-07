// src/index.ts

import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from Bun + Hono!')
})

export default app
