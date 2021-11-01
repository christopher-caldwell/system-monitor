import Router from '@koa/router'

import { Routes } from '@/routes/routes'
import { getCpuUsage, getCpuName } from './cpu'
import { getGpuName, getGpuUtilization, getGpuCapacity } from './gpu'

export const router = new Router()

router.get(Routes.CpuUsage, async ctx => {
  ctx.body = await getCpuUsage()
})
router.get(Routes.CpuTemp, async ctx => {
  ctx.body = 52
})
router.get(Routes.CpuName, async ctx => {
  ctx.body = getCpuName()
})

// Memory
router.get(Routes.MemoryCapacity, ctx => {
  ctx.body = 3200
})
router.get(Routes.MemoryUsage, ctx => {
  ctx.body = 2271
})

// GPU
router.get(Routes.GpuName, async ctx => {
  ctx.body = await getGpuName()
})
router.get(Routes.GpuTemp, ctx => {
  ctx.body = 52
})
router.get(Routes.GpuUsage, async ctx => {
  ctx.body = await getGpuUtilization()
})
router.get(Routes.GpuCapacity, async ctx => {
  ctx.body = await getGpuCapacity()
})
