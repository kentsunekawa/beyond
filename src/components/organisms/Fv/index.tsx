import styled from '@emotion/styled'
import * as styles from './style'
import { SITEDATA } from 'utils/constants'

interface ComponentProps {
  className?: string
}

type Props = ComponentProps

const Structure: React.VFC<Props> = ({ className }) => (
  <section className={className}>
    <div className='text'>
      <h1 className='title'>{SITEDATA.title}</h1>
      <p className='catch'>{SITEDATA.subTitle}</p>
    </div>
  </section>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = () => {
  return <Presenter></Presenter>
}

export default Container
