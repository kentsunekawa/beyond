import styled from '@emotion/styled'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

type Props = {
  page: string
  children?: React.ReactNode
  className?: string
}

const Structure: React.VFC<Props> = ({ children, page, className }) => {
  return (
    <div className={className}>
      <Header logo={page !== 'index'} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const Presenter = styled(Structure)`
  /* background: #000; */
  background: ${({ theme }) => theme.backgroundColor};
`

export default Presenter
