import osUtils from 'os-utils'

export const getCpuUsage = async (): Promise<number> => {
  return new Promise((resolve, reject) => {
    osUtils.cpuUsage((usage) => {
      return resolve(usage)
    })
  })
}
