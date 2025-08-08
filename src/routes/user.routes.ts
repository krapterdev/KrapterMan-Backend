// src/routes/user.routes.ts
import { Router } from 'express';
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  removeUser,
} from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', removeUser);

export default router;
