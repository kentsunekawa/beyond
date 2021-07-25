import { InMemoryCache, makeVar } from '@apollo/client'
import { PostSearchQuery as PostSearchQueryType, Mode } from 'types'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

export const searchPostQueryVar = makeVar<PostSearchQueryType>({
  keyword: '',
  orderBy: 'createdAt_ASC',
  tags: [],
  skip: 0,
  page: 1,
  first: POSTS_NUM_PER_PAGE,
  last: null,
  before: null,
  after: null,
})

export const modeVar = makeVar<Mode>('light')

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        searchPostQuery: {
          read() {
            return searchPostQueryVar()
          },
        },
        mode: {
          read() {
            return modeVar()
          },
        },
      },
    },
  },
})
