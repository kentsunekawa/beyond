import { useCallback } from 'react'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { useGetPosts } from 'hooks'
import { searchPostQueryVar } from 'cache'
import { PostSearchQuery } from 'types'
import { POSTS_QUERY } from 'operations/queries'
import { client } from 'client'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'
import QueryDisplay from 'components/organisms/QueryDisplay'
import PostQueryInput from 'components/organisms/PostQueryInput'
import Pagination from 'components/organisms/Pagination'
import Loading from 'components/atoms/Loading'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

export type Props = {
  tags: string[]
}

const Page: React.VFC<Props> = ({ tags }) => {
  const page = 'posts'

  const { searchPostQuery, isLoading, postList, pageInfo, count } =
    useGetPosts()

  const desideQuery = useCallback((query: PostSearchQuery) => {
    searchPostQueryVar({
      ...query,
      skip: null,
      page: 1,
      first: POSTS_NUM_PER_PAGE,
      last: null,
      before: null,
      after: null,
    })
  }, [])

  const goNext = useCallback(() => {
    searchPostQueryVar({
      ...searchPostQuery,
      page: searchPostQuery.page + 1,
      skip: null,
      before: null,
      after: pageInfo.endCursor,
      first: POSTS_NUM_PER_PAGE,
      last: null,
    })
  }, [searchPostQuery, pageInfo])

  const goPrev = useCallback(() => {
    searchPostQueryVar({
      ...searchPostQuery,
      page: searchPostQuery.page - 1,
      skip: null,
      before: pageInfo.startCursor,
      after: null,
      first: null,
      last: POSTS_NUM_PER_PAGE,
    })
  }, [searchPostQuery, pageInfo])

  const goPage = useCallback(
    (page: number) => {
      searchPostQueryVar({
        ...searchPostQuery,
        page,
        skip: (page - 1) * POSTS_NUM_PER_PAGE,
        before: null,
        after: null,
        first: POSTS_NUM_PER_PAGE,
        last: null,
      })
    },
    [searchPostQuery],
  )

  return (
    <div>
      <Head title='' description='' />
      <Base page={page}>
        <PostQueryInput
          tags={tags}
          className='queryInputArea'
          postSearchQuery={searchPostQuery}
          desideQuery={desideQuery}
        />
        <div>
          <QueryDisplay />
        </div>
        <div className='main'>
          {isLoading && <Loading className='loading' />}
          {isLoading || <PostList postList={postList} count={count} />}
        </div>
        <Pagination
          className='pagination'
          pageInfo={pageInfo}
          count={count}
          currentPage={searchPostQuery.page}
          goNext={goNext}
          goPrev={goPrev}
          goPage={goPage}
        />
      </Base>
    </div>
  )
}

const Posts = styled(Page)``

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: POSTS_QUERY,
    variables: { stage: process.env.NEXT_PUBLIC_POST_STAGE },
  })

  let tags: string[] = []
  data.postsConnection.edges.forEach((edge: any) => {
    tags = [...tags, ...edge.node.tags]
  })

  const uniqTags: string[] = []
  new Set(tags).forEach((tag) => {
    uniqTags.push(tag)
  })

  return {
    props: {
      tags: uniqTags,
    },
  }
}
