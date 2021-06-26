import { useMemo, useCallback } from 'react'
import Link from 'next/link'

import { PageInfo } from 'types'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

export type Props = {
  pageInfo: PageInfo
  count: number
  currentPage: number
  goNext: () => void
  goPrev: () => void
  goPage: (page: number) => void
}

const Container: React.VFC<Props> = ({
  pageInfo,
  count,
  currentPage,
  goNext,
  goPrev,
  goPage,
}) => {
  const calcPages = useMemo(() => {
    return [...Array(Math.ceil(count / POSTS_NUM_PER_PAGE))].map(
      (_, i) => i + 1,
    )
  }, [count])

  const onClickPage = useCallback(
    (page: number) => {
      page !== currentPage && goPage(page)
    },
    [currentPage],
  )

  return (
    <div>
      {pageInfo.hasPreviousPage && <button onClick={goPrev}>Prev</button>}
      {calcPages.length > 2 &&
        calcPages.map((page) => (
          <button
            key={page}
            onClick={() => onClickPage(page)}
            className={currentPage === page ? '-active' : ''}
          >
            {page}
          </button>
        ))}
      {pageInfo.hasNextPage && <button onClick={goNext}>Next</button>}
    </div>
  )
}

export default Container
