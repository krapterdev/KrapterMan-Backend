// import { Hono } from 'hono';
// import pool from './config/db.ts';  

// const app = new Hono();

// app.get('/', (c) => c.text('Hello from Bun + Hono'));

// app.get('/db-test', async (c) => {
//   try {
//     const res = await pool.query('SELECT NOW()');
//     return c.json({ connected: true, time: res.rows[0].now });
//   } 
//   catch (error) {
//     console.error('Database connection error:', error);
//     return c.json({ connected: false, error: error.message });
//   }
// });

// export default app;

import { Hono } from 'hono'
import userRoutes from './routes/user.routes'

const app = new Hono()
app.route('/users', userRoutes)

export default app
