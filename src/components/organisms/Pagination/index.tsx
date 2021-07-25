import { useMemo, useCallback } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './styles'
import { PageInfo } from 'types'
import { POSTS_NUM_PER_PAGE } from 'utils/constants'

// type definitions
export type Props = {
  pageInfo: PageInfo
  count: number
  currentPage: number
  goNext: () => void
  goPrev: () => void
  goPage: (page: number) => void
  className?: string
}

const Structure: React.VFC<Props> = ({
  pageInfo,
  count,
  currentPage,
  goNext,
  goPrev,
  goPage,
  className,
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
    <div className={className}>
      {pageInfo.hasPreviousPage && (
        <button className='button -prev' onClick={goPrev}>
          Prev
        </button>
      )}
      {calcPages.length > 2 &&
        calcPages.map((page) => (
          <button
            key={page}
            onClick={() => onClickPage(page)}
            className={classNames(
              'button',
              currentPage === page ? '-active' : '',
            )}
          >
            {page}
          </button>
        ))}
      {pageInfo.hasNextPage && (
        <button className='button -next' onClick={goNext}>
          Next
        </button>
      )}
    </div>
  )
}

export const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
