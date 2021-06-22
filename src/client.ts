import { ApolloClient } from '@apollo/client'
import { cache } from 'cache'

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_END_POINT}`,
  cache,
})
