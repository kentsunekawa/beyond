import styled from '@emotion/styled'
import * as styles from './style'

interface ComponentProps {
  className?: string
}

type Props = ComponentProps

const Structure: React.VFC<Props> = ({ className }) => (
  <footer className={className}>
    <p className='copyright'>&copy; 2021 Ken Tsunekawa</p>
  </footer>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = () => {
  return <Presenter />
}

export default Container
