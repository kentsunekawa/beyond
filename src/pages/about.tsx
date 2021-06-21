import Head from 'components/templates/Head'

import Base from 'components/templates/Base'
import PageTitle from 'components/atoms/PageTitle'

const About: React.FC = () => {
  const page = 'about'
  return (
    <>
      <Head title="about" description="about" />
      <Base page={page}>
        <PageTitle title="About" />
      </Base>
    </>
  )
}

export default About
