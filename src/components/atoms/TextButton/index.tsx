export type Props = {
  children: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Container: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

export default Container
