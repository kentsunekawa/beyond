import { InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType } from 'types'

export const serchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: '',
  orderBy: 'createdAt_ASC',
  tagList: [
    {
      slug: '',
      label: '',
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
