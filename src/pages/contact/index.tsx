import Head from 'components/templates/Head'

import Base from 'components/templates/Base'
import PageTitle from 'components/atoms/PageTitle'

const Contact: React.FC = () => {
  const page = 'contact'
  return (
    <>
      <Head title='contact' description='contact' />
      <Base page={page}>
        <PageTitle className='mainTitle'>{page}</PageTitle>
        <p>coming soon</p>
      </Base>
    </>
  )
}

export default Contact
