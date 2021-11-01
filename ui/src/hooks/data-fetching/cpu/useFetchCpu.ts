import { useQuery } from 'react-query'

import { Routes, client } from '@/client'

export const useFetchCpu = () => {
  const { data: cpuNameResponse } = useQuery(Routes.CpuName, () => client.get<string>(Routes.CpuName))
  const { data: cpuTempResponse } = useQuery(Routes.CpuTemp, () => client.get<number>(Routes.CpuTemp), {
    refetchInterval: 2000
  })
  const { data: cpuUsageResponse } = useQuery(Routes.CpuUsage, () => client.get<number>(Routes.CpuUsage), {
    refetchInterval: 2000
  })

  // const isLoading = isGpuNameLoading || isGpuTempLoading

  return {
    cpuName: cpuNameResponse?.data || '-',
    cpuTemp: cpuTempResponse?.data || 0,
    cpuUsage: cpuUsageResponse?.data || 0
  }
}
