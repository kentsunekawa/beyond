import { GetStaticPaths, GetStaticProps } from 'next'

import { POSTS_SLUG_QUERY } from 'queries/posts.query'
import { POST_QUERY } from 'queries/post.query'
import { client } from 'utils/apollo-client'
import { Post as PostType } from 'types'

type Props = {
  post: PostType
}

const Post = ({ post }: Props): JSX.Element => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content.markdown}</div>
    </div>
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
