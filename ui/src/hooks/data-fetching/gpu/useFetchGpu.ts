import { useQuery } from 'react-query'

import { Routes, client } from '@/client'

export const useFetchGpu = () => {
  const { data: gpuNameResponse } = useQuery(Routes.GpuName, () => client.get<string>(Routes.GpuName))
  const { data: gpuTempResponse } = useQuery(Routes.GpuTemp, () => client.get<number>(Routes.GpuTemp))
  const { data: gpuUsageResponse } = useQuery(Routes.GpuUsage, () => client.get<number>(Routes.GpuUsage))
  const { data: gpuCapacityResponse } = useQuery(Routes.GpuCapacity, () => client.get<number>(Routes.GpuCapacity))

  // const isLoading = isGpuNameLoading || isGpuTempLoading

  return {
    gpuName: gpuNameResponse?.data || '-',
    gpuTemp: gpuTempResponse?.data || 0,
    gpuUsage: gpuUsageResponse?.data || 0,
    gpuCapacity: gpuCapacityResponse?.data || 0
  }
}
