// src/services/user.service.ts
import { pool } from '../config/db';
import { User } from '../models/user.model';

export const getAllUsers = async (): Promise<User[]> => {
  const res = await pool.query('SELECT * FROM users ORDER BY id ASC');
  return res.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0] || null;
};

export const createUser = async (name: string, email: string): Promise<User> => {
  const res = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return res.rows[0];
};

export const updateUser = async (id: number, name: string, email: string): Promise<User | null> => {
  const res = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return res.rows[0] || null;
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const res = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  return res.rowCount > 0;
};
