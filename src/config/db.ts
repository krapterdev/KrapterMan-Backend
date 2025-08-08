// src/config/db.ts
import { Pool } from 'pg';
import { config } from 'dotenv';

config(); // Load .env

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Neon requires SSL
  },
});
