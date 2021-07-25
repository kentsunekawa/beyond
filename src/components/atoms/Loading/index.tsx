import styled from 'styled-components'
import * as styles from './styles'

export type Props = {
  className?: string
}

const Structure: React.VFC<Props> = ({ className }) => {
  return <div className={className}>Loading...</div>
}

export const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
