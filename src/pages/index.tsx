import { useMemo } from 'react'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import * as styles from './style'
import Head from 'components/templates/Head'
import { POSTS_QUERY } from 'operations/queries'
import { client } from 'client'
import { PostOverview, PageInfo } from 'types'

import { POSTS_NUM_PER_PAGE } from 'utils/constants'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'
import TextLink from 'components/atoms/TextLink'

type Props = {
  edges: { node: PostOverview }[]
  pageInfo: PageInfo
  aggregate: {
    count: number
  }
  className?: string
}

const Page: React.VFC<Props> = ({
  edges,
  aggregate,
  className,
}): JSX.Element => {
  const page = 'index'

  const postList: PostOverview[] = useMemo(() => {
    return edges.map((edge) => edge.node)
  }, [edges])

  return (
    <>
      <Head title='タイトル' description='説明' />
      <Base page={page}>
        <div className={className}>
          <div className='listHeader'>
            <TextLink href='/posts'>{'MORE >'}</TextLink>
          </div>
          <div className='listArea'>
            <PostList postList={postList} count={aggregate.count} />
          </div>
          <div className='listFooter'>
            <TextLink href='/posts'>{'MORE >'}</TextLink>
          </div>
        </div>
      </Base>
    </>
  )
}

const Index = styled(Page)`
  ${styles.base}
`

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
