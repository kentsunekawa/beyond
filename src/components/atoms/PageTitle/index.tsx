import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'PageTitle'

export type Props = {
  children?: React.ReactNode
  className?: string
}

const PageTitle: React.VFC<Props> = ({ children, className }) => (
  <h2 className={classNames(className, COMPONENT_NAME)}>{children}</h2>
)

const Presenter = styled(PageTitle)`
  ${styles.base}
`

export default Presenter
