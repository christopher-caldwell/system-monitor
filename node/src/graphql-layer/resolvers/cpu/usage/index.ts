import { Resolver } from '@/graphql-layer/types'

export const cpu: Resolver<{ name: string }> = async ({}) => {
  return {
    name: 'hey'
  }
}
