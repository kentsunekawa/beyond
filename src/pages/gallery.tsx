import Head from 'src/components/templates/Head'

import Base from 'src/components/templates/Base'
import PageTitle from 'src/components/atoms/PageTitle'

const Gallery: React.FC = () => {
  const page = 'gallery'
  return (
    <>
      <Head title="gallery" description="gallery" />
      <Base page={page}>
        <PageTitle title="Gallery" />
        <p>coming soon</p>
      </Base>
    </>
  )
}

export default Gallery
