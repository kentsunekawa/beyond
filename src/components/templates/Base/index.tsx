import styled from 'styled-components'
import * as styles from './style'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import Fv from 'components/organisms/Fv'

type Props = {
  page: string
  children?: React.ReactNode
  className?: string
}

const Structure: React.VFC<Props> = ({ children, page, className }) => {
  return (
    <div className={className}>
      <Header logo={page !== 'index'} />
      {page === 'index' && <Fv />}
      <main className={`main -${page}`}>
        <div className='inner'>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
  /* background: #000; */
  background: ${({ theme }) => theme.backgroundColor};
`

export default Presenter
