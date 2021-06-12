import Head from 'src/components/templates/Head'

import Base from 'src/components/templates/Base'
import PageTitle from 'src/components/atoms/PageTitle'

const Contact: React.FC = () => {
  const page = 'contact'
  return (
    <>
      <Head title="contact" description="contact" />
      <Base page={page}>
        <PageTitle title="Contact" />
        <p>coming soon</p>
      </Base>
    </>
  )
}

export default Contact
