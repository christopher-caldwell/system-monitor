import React, { FC, useEffect, useRef } from 'react'
import { useTheme, styled, Theme } from '@mui/material'
import SvgGauge, { Opts, Instance } from 'svg-gauge'
import shouldForwardProp from '@emotion/is-prop-valid'

export const Gauge: FC<GaugeMetric> = props => {
  const { palette } = useTheme()
  const gaugeEl = useRef<HTMLDivElement>(null)
  const gaugeRef = useRef<Instance | null>(null)
  const { percentage, label, unit, isConstant } = props

  const color = getColor(isConstant, percentage, palette) as string
  useEffect(() => {
    if (isNaN(percentage)) return
    if (!gaugeRef.current) {
      if (!gaugeEl.current) return
      const options: Opts = { color: value => getColor(isConstant, value, palette) }
      gaugeRef.current = SvgGauge(gaugeEl.current, options)
      gaugeRef.current?.setValue(1)
    }
    gaugeRef.current?.setValueAnimated(percentage, 1)
  }, [percentage, isConstant, palette])

  return (
    <Container ref={gaugeEl} fillColor={color}>
      <TopLabel>{label}</TopLabel>
      <BottomLabel>{unit}</BottomLabel>
    </Container>
  )
}

interface ContainerProps {
  fillColor: string
}
const Container = styled('div', { shouldForwardProp })<ContainerProps>`
  position: relative;
  & .value-text {
    fill: ${({ fillColor }) => fillColor};
  }
`

const TopLabel = styled('h2')`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 65%;
  margin: 0;
`

const BottomLabel = styled('h3')`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 30%;
  margin: 0;
`

export interface GaugeMetric {
  isConstant: boolean
  label: string
  percentage: number
  unit: string
}
const getColor = (isConstant: boolean, percentage: number, { error, success, primary }: Theme['palette']) => {
  if (isConstant) return primary.main
  if (Math.round(percentage) <= 70) return success.main
  // For some reason, the lib is distorting the variable for the warning color. It is converting into an rgb that is not the same color.
  if (Math.round(percentage) <= 90) return '#e2c209'
  return error.main
}
