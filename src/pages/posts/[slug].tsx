import { GetStaticPaths, GetStaticProps } from 'next'

import { POSTS_SLUG_QUERY } from 'src/queries/posts.query'
import { POST_QUERY } from 'src/queries/post.query'
import { client } from 'src/utils/apollo-client'
import { Post as PostType } from 'src/types'
import Head from 'src/components/templates/Head'
import Base from 'src/components/templates/Base'
import PostContent from 'src/components/templates/PostContent'

type Props = {
  post: PostType
}

const Post = ({ post }: Props): JSX.Element => {
  const page = 'post'
  return (
    <>
      <Head title={post.title} description="説明" />
      <Base page={page}>
        <PostContent post={post} />
      </Base>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: POSTS_SLUG_QUERY,
  })

  const paths = data.posts.map((post: { slug: string }) => {
    return { params: { slug: post.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: {
      slug: params!.slug,
    },
  })

  return {
    props: {
      post: data.post,
    },
  }
}
