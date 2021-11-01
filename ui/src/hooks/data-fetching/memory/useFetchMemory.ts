import { useQuery } from 'react-query'

import { Routes, client } from '@/client'

export const useFetchMemory = () => {
  const { data: memoryCapacityResponse } = useQuery(Routes.MemoryCapacity, () =>
    client.get<number>(Routes.MemoryCapacity)
  )
  const { data: memoryUsageResponse } = useQuery(Routes.MemoryUsage, () => client.get<number>(Routes.MemoryUsage))

  // const isLoading = isGpuNameLoading || isGpuTempLoading

  return {
    memoryCapacity: (memoryCapacityResponse?.data || 0) / 100,
    memoryUsage: (memoryUsageResponse?.data || 0) / 100
  }
}
