import pool from '../config/db'
import { User } from '../models/user.model'

export const fetchAllUsers = async (): Promise<User[]> => {
  const res = await pool.query('SELECT * FROM users')
  return res.rows
}

export const fetchUserById = async (id: number): Promise<User | null> => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  return res.rows[0] || null
}

export const createUser = async (name: string, email: string): Promise<User> => {
  const res = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
  return res.rows[0]
}

export const updateUser = async (id: number, name: string, email: string): Promise<User> => {
  const res = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  )
  return res.rows[0]
}

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = $1', [id])
}
