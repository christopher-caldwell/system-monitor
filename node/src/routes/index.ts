import Router from '@koa/router'

import { Routes } from '@/routes/routes'
import { getCpuUsage } from './cpu'
// import {} from './gpu'

export const router = new Router()

router.get(Routes.Cpu, async ctx => {
  ctx.body = await getCpuUsage()
})

router.get(Routes.Memory, ctx => {
  ctx.body = 'Memory'
})
