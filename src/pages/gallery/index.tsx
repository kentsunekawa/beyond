import Head from 'components/templates/Head'

import Base from 'components/templates/Base'
import PageTitle from 'components/atoms/PageTitle'

const Gallery: React.FC = () => {
  const page = 'gallery'
  return (
    <>
      <Head title='gallery' description='gallery' />
      <Base page={page}>
        <PageTitle className='mainTitle'>{page}</PageTitle>
        <p>coming soon</p>
      </Base>
    </>
  )
}

export default Gallery
