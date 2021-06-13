import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType } from 'src/types'

export const serchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: 'aaa',
  sort: 'desc',
  tagList: [
    {
      slug: 'test',
      label: 'Test',
    },
  ],
  offset: 1,
  limit: 10,
})

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        serchPostQuery: {
          read() {
            return serchPostQueryVar()
          },
        },
      },
    },
  },
})
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_END_POINT}`,
  cache,
})
