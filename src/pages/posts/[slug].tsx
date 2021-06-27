import { GetStaticPaths, GetStaticProps } from 'next'

import { POSTS_SLUG_QUERY, POST_QUERY } from 'operations/queries'

import { client } from 'client'
import { Post as PostType } from 'types'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PostContent from 'components/templates/PostContent'

type Props = {
  post: PostType
}

const Post: React.VFC<Props> = ({ post }) => {
  const page = 'post'

  console.log(post)

  return (
    <>
      <Head
        title={post.seo ? post.seo.title : ''}
        description={post.seo ? post.seo.description : ''}
        image={post.seo ? post.seo.image.url : ''}
      />
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
