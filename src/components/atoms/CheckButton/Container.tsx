import Presenter from './Presenter'

export type ContainerProps = {
  children: React.ReactNode
  isSelected: boolean
  onSelect?: (isSelected: boolean) => void
}

const Container: React.FC<ContainerProps> = ({
  children,
  isSelected,
  onSelect,
}) => {
  const change = () => {
    onSelect && onSelect(!isSelected)
  }

  return (
    <Presenter isSelected={isSelected} change={change}>
      {children}
    </Presenter>
  )
}

export default Container
