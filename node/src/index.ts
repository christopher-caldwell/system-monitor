import Koa from 'koa'
import cors from '@koa/cors'

import { router } from '@/routes'

const app = new Koa()
const PORT = 5002
const HOST = '0.0.0.0'

// Failover middleware
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    const error = err as WholisticError
    console.error(error.status)
    ctx.status = error.status || 500
    ctx.body = error.message
  }
})
app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, HOST)

interface WholisticError {
  message: string
  status?: number
}
