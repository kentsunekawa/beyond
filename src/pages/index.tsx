import { GetStaticProps } from 'next'
import Head from 'components/templates/Head'
import { POSTS_QUERY } from 'operations/queries/posts.query'
import { client } from 'client'
import { PostList as PostListType } from 'types'

import Base from 'components/templates/Base'
import Fv from 'components/organisms/Fv'
import PostList from 'components/organisms/PostList'

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
