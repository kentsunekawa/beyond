export type Props = {
  title: string
}

const Container: React.FC<Props> = ({ title }) => {
  return <h2>{title}</h2>
}

export default Container
