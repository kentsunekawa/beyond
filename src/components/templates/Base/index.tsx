import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

type Props = {
  page: string
}

const Base: React.FC<Props> = ({ children, page }) => {
  return (
    <>
      <Header logo={page !== 'index'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Base
