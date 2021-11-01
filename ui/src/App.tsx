import React, { FC, Suspense } from 'react'
import { styled } from '@mui/material'

import GaugesDisplay from '@/pages'

const App: FC = () => {
  return (
    <Root>
      <Suspense fallback={<span />}>
        <GaugesDisplay />
      </Suspense>
    </Root>
  )
}

const Root = styled('div')`
  padding: 1% 2%;
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
