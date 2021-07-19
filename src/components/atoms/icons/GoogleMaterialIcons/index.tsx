import styled from 'styled-components'
import classNames from 'classnames'

export type Props = {
  iconName: string
  className?: string
}

const Structure: React.VFC<Props> = ({ className, iconName }) => (
  <span className={classNames(className, 'material-icons-sharp')}>
    {iconName}
  </span>
)

const Presenter = styled(Structure)`
  font-size: inherit;
  color: inherit;
  line-height: 1em;
`

export default Presenter
