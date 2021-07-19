import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

export type Props = {
  onClick: () => void
  className?: string
  disabled?: boolean
  children?: React.ReactChild
}

const Structure: React.VFC<Props> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(className, disabled ? '-disabled' : '')}
    >
      {children}
    </button>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
