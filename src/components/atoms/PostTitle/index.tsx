import styled from 'styled-components'

import * as styles from './style'

export type Props = {
  className?: string
  children?: React.ReactNode
}

const Structure: React.VFC<Props> = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
