import { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@apollo/client'

import { client } from 'client'
import { searchPostQueryVar } from 'cache'
import {
  FILTERD_POSTS_QUERY,
  FILTERD_POSTS_QUERY_WITH_TAGLIST,
} from 'operations/queries/posts.query'
import { GET_SEARCH_POST_QUERY } from 'operations/queries/searchPostQuery.query'
import {
  PostList as PostListType,
  PostSearchQuery as PostSearchQueryType,
} from 'types'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'
import PostQueryInput from 'components/organisms/PostQueryInput'
import Loading from 'components/atoms/Loading'

const Container = (): JSX.Element => {
  const page = 'posts'

  const { data, loading, error } = useQuery<{
    searchPostQuery: PostSearchQueryType
  }>(GET_SEARCH_POST_QUERY)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])

  useEffect(() => {
    const getPost = async () => {
      if (data) {
        setIsLoading(true)
        try {
          const result = await client.query({
            query:
              data.searchPostQuery.tagList.length > 0
                ? FILTERD_POSTS_QUERY_WITH_TAGLIST
                : FILTERD_POSTS_QUERY,
            variables: {
              ...data?.searchPostQuery,
            },
          })
          setIsLoading(false)
          setPostList(result.data.posts)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getPost()
  }, [data])

  const desideQuery = useCallback((query: PostSearchQueryType) => {
    searchPostQueryVar(query)
  }, [])

  return (
    <div>
      <Head title="" description="" />
      <Base page={page}>
        <div>
          {data ? (
            <PostQueryInput
              postSearchQuery={data.searchPostQuery}
              desideQuery={desideQuery}
            />
          ) : (
            <Loading />
          )}
        </div>
        <div>
          {isLoading && <Loading />}
          {isLoading || <PostList postList={postList} />}
        </div>
      </Base>
    </div>
  )
}

export default Container
