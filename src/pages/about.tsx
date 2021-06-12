import Head from 'src/components/templates/Head'

import Base from 'src/components/templates/Base'
import PageTitle from 'src/components/atoms/PageTitle'

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
