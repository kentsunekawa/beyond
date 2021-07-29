import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'ComponentName'

type StyleTypes = 'hoge' | 'fuga'

export type Props = {
  styleTypes?: StyleTypes[]
  children?: React.ReactNode
  className?: string
}

const ComponentName: React.VFC<Props> = ({ children, className }) => (
  <div className={classNames(className, COMPONENT_NAME)}>{children}</div>
)

const Presenter = styled(ComponentName)`
  ${styles.base}
  ${({ styleTypes }) =>
    styleTypes && styleTypes.map((styleType) => styles[styleType])}
`

export default Presenter
