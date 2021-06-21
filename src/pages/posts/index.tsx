import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { client } from 'client'
import { serchPostQueryVar } from 'cache'
import { FILTERD_POSTS_QUERY } from 'operations/queries/posts.query'
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
    serchPostQuery: PostSearchQueryType
  }>(GET_SEARCH_POST_QUERY)

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true)
      try {
        console.log(data)

        const result = await client.query({
          query: FILTERD_POSTS_QUERY,
          variables: {
            ...data?.serchPostQuery,
          },
        })
        setIsLoading(false)
        setPostList(result.data.posts)
      } catch (error) {
        console.log(error)
      }
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
