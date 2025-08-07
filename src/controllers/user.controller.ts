import { Context } from 'hono'
import { fetchAllUsers } from '../services/user.service'

export const getAllUsers = async (c: Context) => {
  const users = await fetchAllUsers()
  return c.json(users)
}
