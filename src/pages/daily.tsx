import Head from 'components/templates/Head'

import Base from 'components/templates/Base'
import PageTitle from 'components/atoms/PageTitle'

const Daily: React.FC = () => {
  const page = 'daily'
  return (
    <>
      <Head title="daily" description="daily" />
      <Base page={page}>
        <PageTitle title="Daily" />
        <p>coming soon</p>
      </Base>
    </>
  )
}

export default Daily
