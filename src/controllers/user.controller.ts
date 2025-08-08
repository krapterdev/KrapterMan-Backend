// src/controllers/user.controller.ts
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../services/user.service';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await getUserById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const postUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await createUser(name, email);
  res.status(201).json(user);
};

export const putUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = await updateUser(id, name, email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const removeUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = await deleteUser(id);
  if (!success) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};
