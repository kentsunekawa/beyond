import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

type StyleTypes = 'gray'

export type Props = {
  onClick: () => void
  className?: string
  disabled?: boolean
  children?: React.ReactChild
  styleTypes?: StyleTypes[]
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
  ${({ styleTypes }) =>
    styleTypes && styleTypes.map((styleType) => styles[styleType])}
`

export default Presenter
