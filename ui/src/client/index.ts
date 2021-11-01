import axios from 'axios'

export { Routes } from '../../../node/src/routes/routes'

const baseURL = 'http://localhost:5002'

export const client = axios.create({
  baseURL
})

// export enum Routes {
//   CpuUsage = '/cpu/usage',
//   CpuName = '/cpu/name',
//   CpuTemp = '/cpu/temp',
//   MemoryUsage = '/memory/usage',
//   MemoryCapacity = '/memory/capacity',
//   GpuUsage = '/gpu/usage',
//   GpuName = '/gpu/name',
//   GpuTemp = '/gpu/temp'
// }
