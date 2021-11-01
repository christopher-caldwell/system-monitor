import { buildSchema } from 'graphql'

import { stitchSchema } from '@/graphql-layer/util'

import { MutationResultSchema } from './shared'
import { CpuSchema, CpuQueries } from './cpu'

const schemas = stitchSchema(MutationResultSchema, CpuSchema)
const queries = `#graphql
  type Query {
    ${stitchSchema(CpuQueries)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries))
