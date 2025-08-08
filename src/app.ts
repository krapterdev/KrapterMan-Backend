import { Hono } from 'hono'
import userRoutes from './routes/user.routes'

const app = new Hono()

app.route('/api/users', userRoutes)

export default app
