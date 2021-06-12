import { ApolloClient, InMemoryCache } from '@apollo/client'

export const cache = new InMemoryCache()
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_END_POINT}`,
  cache,
})
