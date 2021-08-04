import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'TagList'

export type StyleTypes = 'alignRight' | 'alignLeft' | 'alignCenter'

export type Props = {
  tags: string[]
  className?: string
  styleTypes?: StyleTypes[]
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
  ${({ styleTypes }) =>
    styleTypes && styleTypes.map((styleType) => styles[styleType])}
`

export default Presenter
