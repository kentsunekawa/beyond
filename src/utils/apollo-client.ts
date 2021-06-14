import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType } from 'src/types'

export const serchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: '',
  orderBy: 'createdAt_ASC',
  tagList: [
    {
      slug: 'test',
      label: 'Test',
    },
  ],
  skip: 0,
  first: 10,
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
