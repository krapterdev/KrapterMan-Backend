import pool  from '../config/db'

export const fetchAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users')
  return res.rows
}
