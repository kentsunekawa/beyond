export type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  className?: string
}

const Container: React.VFC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Container
