import { useCallback } from 'react'
import { useGetPosts } from 'hooks'
import { searchPostQueryVar } from 'cache'
import { PostSearchQuery } from 'types'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PostList from 'components/organisms/PostList'
import QueryDisplay from 'components/organisms/QueryDisplay'
import PostQueryInput from 'components/organisms/PostQueryInput'
import Pagination from 'components/organisms/Pagination'
import Loading from 'components/atoms/Loading'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

const Container = (): JSX.Element => {
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
          className='queryInputArea'
          postSearchQuery={searchPostQuery}
          desideQuery={desideQuery}
        />
        <div>
          <QueryDisplay />
        </div>
        <div className='main'>
          {isLoading && <Loading />}
          {isLoading || <PostList postList={postList} count={count} />}
        </div>
        <div className='pagination'>
          <Pagination
            pageInfo={pageInfo}
            count={count}
            currentPage={searchPostQuery.page}
            goNext={goNext}
            goPrev={goPrev}
            goPage={goPage}
          />
        </div>
      </Base>
    </div>
  )
}

export default Container
