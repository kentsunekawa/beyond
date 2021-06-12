import { useState, useEffect } from 'react'
import { client } from 'src/utils/apollo-client'

import { POSTS_QUERY } from 'src/queries/posts.query'
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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [postList, setPostList] = useState<PostListType>([])
  const [postSearchQuery, setPostSearchQuery] = useState<PostSearchQueryType>({
    keyword: '',
    sort: 'desc',
    tagList: [],
  })

  useEffect(() => {
    const getPost = async () => {
      const { data } = await client.query({
        query: POSTS_QUERY,
      })
      setIsLoading(false)
      setPostList(data.posts)
    }
    getPost()
  }, [postSearchQuery])

  const desideQuery = (postSearchQuery: PostSearchQueryType) => {
    setIsLoading(true)
    setPostSearchQuery(postSearchQuery)
  }

  const page = 'posts'
  return (
    <div>
      <Head title="" description="" />
      <Base page={page}>
        <div>
          <PostQueryInput
            postSearchQuery={postSearchQuery}
            desideQuery={desideQuery}
          />
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
