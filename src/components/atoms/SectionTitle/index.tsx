import styled from 'styled-components'

import * as styles from './style'

export type Props = {
  className?: string
  children?: React.ReactNode
}

const Structure: React.VFC<Props> = ({ className, children }) => (
  <h3 className={className}>{children}</h3>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
