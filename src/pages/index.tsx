import { useMemo } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'components/templates/Head'
import { POSTS_QUERY } from 'operations/queries'
import { client } from 'client'
import { PostOverview, PageInfo } from 'types'

import { POSTS_NUM_PER_PAGE } from 'utils/constants'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'

type Props = {
  edges: { node: PostOverview }[]
  pageInfo: PageInfo
  aggregate: {
    count: number
  }
}

const Index: React.VFC<Props> = ({ edges, aggregate }): JSX.Element => {
  const page = 'index'

  const postList: PostOverview[] = useMemo(() => {
    return edges.map((edge) => edge.node)
  }, [edges])

  return (
    <>
      <Head title='タイトル' description='説明' />
      <Base page={page}>
        <div>
          <PostList postList={postList} count={aggregate.count} />
        </div>
        <div>
          <Link href='/posts'>{'More >'}</Link>
        </div>
      </Base>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: POSTS_QUERY,
    variables: {
      first: POSTS_NUM_PER_PAGE,
    },
  })
  return {
    props: {
      edges: data.postsConnection.edges,
      aggregate: data.postsConnection.aggregate,
    },
  }
}
