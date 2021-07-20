import styled from 'styled-components'
import * as styles from './style'

export type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  className?: string
}

const Structure: React.VFC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
