import { Context } from 'hono'
import * as userService from '../services/user.service'

export const getAllUsers = async (c: Context) => {
  const users = await userService.fetchAllUsers()
  return c.json(users)
}

export const getUserById = async (c: Context) => {
  const id = Number(c.req.param('id'))
  const user = await userService.fetchUserById(id)
  if (!user) return c.json({ error: 'User not found' }, 404)
  return c.json(user)
}

export const createUser = async (c: Context) => {
  const body = await c.req.json()
  const newUser = await userService.createUser(body.name, body.email)
  return c.json(newUser, 201)
}

export const updateUser = async (c: Context) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()
  const updatedUser = await userService.updateUser(id, body.name, body.email)
  return c.json(updatedUser)
}

export const deleteUser = async (c: Context) => {
  const id = Number(c.req.param('id'))
  await userService.deleteUser(id)
  return c.json({ message: 'User deleted' })
}
