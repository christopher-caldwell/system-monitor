import osUtils from 'os-utils'
import os from 'os'

export const getCpuUsage = async (): Promise<number> => {
  return new Promise((resolve, reject) => {
    osUtils.cpuUsage((usage) => {
      return resolve(usage)
    })
  })
}

export const getCpuName = () => {
  return os.cpus()[0].model
}