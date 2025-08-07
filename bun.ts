// bun.ts (in root)

import app from './src/index'

export default {
  port: 3000,
  fetch: app.fetch,
}
