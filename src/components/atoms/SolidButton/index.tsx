export type Props = {
  children: React.ReactChild
  onClick: () => void
}

const Container: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

export default Container
