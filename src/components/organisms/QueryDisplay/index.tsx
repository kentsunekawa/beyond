import styled from 'styled-components'
import { useReactiveVar } from '@apollo/client'
import classNames from 'classnames'
import * as styles from './style'
import { PostSearchQuery } from 'types'
import { searchPostQueryVar } from 'cache'
import TagList from 'components/molecules/TagList'

export type ComponentProps = {
  className?: string
}

export type Props = ComponentProps & {
  searchQuery: PostSearchQuery
}

export const Structure: React.VFC<Props> = ({ searchQuery, className }) => (
  <div className={classNames(className)}>
    {searchQuery.keyword !== '' && (
      <div className='row -keyword'>
        <span className='label'>Keyword:</span>
        <div className='value -keyword'>&quot;{searchQuery.keyword}&quot;</div>
      </div>
    )}
    {searchQuery.tags.length > 0 && (
      <div className='row -tags'>
        <span className='label'>Tags:</span>
        <div className='value -tags'>
          <TagList tags={searchQuery.tags} styleTypes={['alignLeft']} />
        </div>
      </div>
    )}
  </div>
)

export const Presenter = styled(Structure)`
  ${styles.base}
`

export const Container: React.VFC<ComponentProps> = (componentProps) => {
  const searchQuery = useReactiveVar(searchPostQueryVar)

  const props = { searchQuery }
  return <Presenter {...componentProps} {...props} />
}

export default Container
