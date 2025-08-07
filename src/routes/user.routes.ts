import { Hono } from 'hono'
import { getAllUsers } from '../controllers/user.controller'

const router = new Hono()

router.get('/', getAllUsers)

export default router
