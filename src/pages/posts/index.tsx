import { useState, useEffect, useCallback } from 'react'
import { useQuery, useReactiveVar } from '@apollo/client'

import { client } from 'client'
import { searchPostQueryVar } from 'cache'
import {
  FILTERD_POSTS_QUERY,
  FILTERD_POSTS_QUERY_WITH_TAGS,
} from 'operations/queries/posts.query'
import {
  PostList as PostListType,
  PostSearchQuery as PostSearchQueryType,
  PostOverview,
  PageInfo,
} from 'types'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'
import PostQueryInput from 'components/organisms/PostQueryInput'
import Pagination from 'components/organisms/Pagination'
import Loading from 'components/atoms/Loading'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

const Container = (): JSX.Element => {
  const page = 'posts'

  const searchPostQuery =
    useReactiveVar<PostSearchQueryType>(searchPostQueryVar)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null)
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
        console.log('error')
        console.log(error)
      }
    }
    getPost()
  }, [searchPostQuery])

  const desideQuery = useCallback((query: PostSearchQueryType) => {
    searchPostQueryVar(query)
  }, [])

  const goNext = useCallback(() => {
    console.log(pageInfo?.endCursor)

    console.log('next')
  }, [searchPostQuery, pageInfo])

  const goPrev = useCallback(() => {
    console.log(pageInfo?.startCursor)
    console.log('prev')
  }, [searchPostQuery, pageInfo])

  const goPage = useCallback(
    (page: number) => {
      searchPostQueryVar({
        ...searchPostQuery,
        page,
        skip: (page - 1) * POSTS_NUM_PER_PAGE,
      })
    },
    [searchPostQuery],
  )

  return (
    <div>
      <Head title="" description="" />
      <Base page={page}>
        <div>
          <PostQueryInput
            postSearchQuery={searchPostQuery}
            desideQuery={desideQuery}
          />
        </div>
        <div>
          {isLoading && <Loading />}
          {isLoading || <PostList postList={postList} count={count} />}
        </div>
        {pageInfo && (
          <Pagination
            pageInfo={pageInfo}
            count={count}
            currentPage={searchPostQuery.page}
            goNext={goNext}
            goPrev={goPrev}
            goPage={goPage}
          />
        )}
      </Base>
    </div>
  )
}

export default Container
