import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { client, serchPostQueryVar } from 'src/utils/apollo-client'

import { POSTS_QUERY } from 'src/queries/posts.query'
import { GET_SEARCH_POST_QUERY } from 'src/queries/searchPostQuery.query'
import {
  PostList as PostListType,
  PostSearchQuery as PostSearchQueryType,
} from 'src/types'
import Head from 'src/components/templates/Head'
import Base from 'src/components/templates/Base'
import PostList from 'src/components/organisms/PostList'
import PostQueryInput from 'src/components/organisms/PostQueryInput'
import Loading from 'src/components/atoms/Loading'

const Container = (): JSX.Element => {
  const page = 'posts'

  const { data, loading, error } = useQuery<{
    serchPostQuery: PostSearchQueryType
  }>(GET_SEARCH_POST_QUERY)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true)
      const { data } = await client.query({
        query: POSTS_QUERY,
      })
      setIsLoading(false)
      setPostList(data.posts)
    }
    getPost()
  }, [data])

  const desideQuery = (query: PostSearchQueryType) => {
    serchPostQueryVar(query)
  }

  return (
    <div>
      <Head title="" description="" />
      <Base page={page}>
        <div>
          {data ? (
            <PostQueryInput
              postSearchQuery={data.serchPostQuery}
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
