import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'TagList'

export type Props = {
  tags: string[]
  className?: string
}

const TagList: React.VFC<Props> = ({ tags, className }) => (
  <div className={classNames(className, COMPONENT_NAME)}>
    {tags.map((tag) => (
      <div className='tag' key={tag}>
        {tag}
      </div>
    ))}
  </div>
)

const Presenter = styled(TagList)`
  ${styles.base}
`

export default Presenter
