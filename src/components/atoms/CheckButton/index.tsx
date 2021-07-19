import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

export type ContainerProps = {
  isSelected: boolean
  onSelect?: (isSelected: boolean) => void
  className?: string
  children?: React.ReactNode
}

export interface Props extends ContainerProps {
  change: () => void
}

const Structure: React.VFC<Props> = ({
  isSelected,
  children,
  className,
  change,
}) => {
  return (
    <label className={classNames(className, isSelected ? '-selected' : '')}>
      <span className='text'>{children}</span>
      <input type='checkbox' checked={isSelected} onChange={change} />
    </label>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.FC<ContainerProps> = (componentProps) => {
  const { onSelect, isSelected } = componentProps

  const change = () => {
    onSelect && onSelect(!isSelected)
  }

  const props = { change }

  return <Presenter {...componentProps} {...props} />
}

export default Container
