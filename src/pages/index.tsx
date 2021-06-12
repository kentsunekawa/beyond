import { GetStaticProps } from 'next'
import Head from 'src/components/templates/Head'
import { POSTS_QUERY } from 'src/queries/posts.query'
import { client } from 'src/utils/apollo-client'
import { PostList as PostListType } from 'src/types'

import Base from 'src/components/templates/Base'
import Fv from 'src/components/organisms/Fv'
import PostList from 'src/components/organisms/PostList'

type Props = {
  posts: PostListType
}

const Index = ({ posts }: Props): JSX.Element => {
  const page = 'index'
  return (
    <>
      <Head title="タイトル" description="説明" />
      <Base page={page}>
        <Fv />
        <div>
          <PostList postList={posts} />
        </div>
      </Base>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: POSTS_QUERY,
  })
  return {
    props: {
      posts: data.posts,
    },
  }
}
