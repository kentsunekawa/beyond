import { useState, useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import {
  PostList as PostListType,
  PostSearchQuery as PostSearchQueryType,
  PostOverview,
  PageInfo,
} from 'types'
import { searchPostQueryVar } from 'cache'
import { client } from 'client'
import {
  FILTERD_POSTS_QUERY,
  FILTERD_POSTS_QUERY_WITH_TAGS,
} from 'operations/queries'

const useGetPosts = (): {
  searchPostQuery: PostSearchQueryType
  isLoading: boolean
  postList: PostListType
  pageInfo: PageInfo
  count: number
} => {
  const searchPostQuery =
    useReactiveVar<PostSearchQueryType>(searchPostQueryVar)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
    pageSize: 0,
  })
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true)
      try {
        const result = await client.query({
          query:
            searchPostQuery.tags.length > 0
              ? FILTERD_POSTS_QUERY_WITH_TAGS
              : FILTERD_POSTS_QUERY,
          variables: {
            ...searchPostQuery,
          },
        })
        setIsLoading(false)
        const posts = result.data.postsConnection.edges.map(
          (edge: { node: PostOverview }) => edge.node,
        )
        setPostList(posts)
        setPageInfo(result.data.postsConnection.pageInfo)
        setCount(result.data.postsConnection.aggregate.count)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getPost()
  }, [searchPostQuery])

  return { searchPostQuery, isLoading, postList, pageInfo, count }
}

export default useGetPosts
