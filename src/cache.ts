import { InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType } from 'types'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

export const searchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: '',
  orderBy: 'createdAt_ASC',
  tags: [],
  skip: 0,
  page: 1,
  first: POSTS_NUM_PER_PAGE,
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
