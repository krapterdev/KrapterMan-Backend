import pool from '../config/db';

const setup = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      INSERT INTO users (name, email)
      VALUES
        ('Sahil Kumar', 'sahil@example.com'),
        ('Amit Sharma', 'amit@example.com'),
        ('Priya Singh', 'sdsds'),
        ('riya Singh', 'sds')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log("✅ Table created and data inserted.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error in setup:", err);
    process.exit(1);
  }
};

setup();
