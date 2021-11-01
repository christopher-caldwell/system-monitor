import React, { FC } from 'react'
import { styled, Grid } from '@mui/material'

import { Gauge } from '@/components/gauge'
import { useFetchGpu, useFetchCpu, useFetchMemory } from '@/hooks/data-fetching'

const Display: FC = () => {
  const { gpuName, gpuTemp, gpuUsage, gpuCapacity } = useFetchGpu()
  const { cpuName, cpuTemp } = useFetchCpu()
  const { memoryUsage, memoryCapacity } = useFetchMemory()
  return (
    <Grid container spacing={0}>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <MetaCategory>CPU</MetaCategory>
          <ResourceName>{cpuName}</ResourceName>
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          {/* TODO: Histogram */}
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          {/* TODO: Histogram */}
          <Gauge percentage={cpuTemp} label='Temp' isConstant={false} unit='&#176;C' />
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          <MetaCategory>RAM</MetaCategory>
          <ResourceName>
            {memoryUsage} / {memoryCapacity}GB
          </ResourceName>
          <Gauge percentage={(memoryUsage / memoryCapacity) * 100} label='Load' isConstant={false} unit='%' />
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          <MetaCategory>vRAM</MetaCategory>
          <ResourceName>
            {((gpuUsage / 100) * gpuCapacity).toFixed(1)} / {(gpuCapacity / 1000).toFixed(1)}GB
          </ResourceName>
          <Gauge percentage={gpuUsage} label='Load' isConstant={false} unit='%' />
        </Grid>
      </Grid>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <MetaCategory>GPU</MetaCategory>
          <ResourceName>{gpuName}</ResourceName>
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          {/* TODO: Histogram */}
        </Grid>
        <Grid item xs={6} justifyContent='center'>
          <Gauge percentage={gpuTemp} label='Temp' isConstant={false} unit='&#176;C' />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <Grid item xs={12} justifyContent='center'>
            <MetaCategory>Fan Speed</MetaCategory>
          </Grid>
          <Grid item xs={6} justifyContent='center'>
            <Gauge percentage={17} label='GPU' isConstant={true} unit='%' />
          </Grid>
          <Grid item xs={6} justifyContent='center'>
            <Gauge percentage={25} label='CPU Power' isConstant={true} unit='W' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const MetaCategory = styled('h2')`
  margin: 0;
  text-align: center;
`
const ResourceName = styled('h3')`
  margin: 0;
  text-align: center;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export default Display
