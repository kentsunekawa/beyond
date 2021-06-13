import { ContainerProps } from './Container'

export interface Props extends ContainerProps {
  change: () => void
}

const Presenter: React.FC<Props> = ({ isSelected, children, change }) => {
  return (
    <label>
      <span>{children}</span>
      <input type="checkbox" checked={isSelected} onChange={change} />
    </label>
  )
}

export default Presenter
