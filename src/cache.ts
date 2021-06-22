import { InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType } from 'types'

export const searchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: '',
  orderBy: 'createdAt_ASC',
  tagList: [],
  skip: 0,
  first: 10,
})

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        searchPostQuery: {
          read() {
            return searchPostQueryVar()
          },
        },
      },
    },
  },
})
