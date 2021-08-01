import { GetStaticProps } from 'next'
import Head from 'components/templates/Head'
import Base from 'components/templates/Base'
import PageContent from 'components/templates/PageContent'
import { client } from 'client'
import { GET_PAGE_DATA } from 'operations/queries'

import { Page } from 'types'

type Props = {
  pageData: Page
}

const About: React.VFC<Props> = ({ pageData }) => {
  const page = 'about'
  return (
    <>
      <Head
        title={pageData.seo.title}
        description={pageData.seo.description}
        image={pageData.seo.image.url}
      />
      <Base page={page}>
        <PageContent page={pageData} />
      </Base>
    </>
  )
}

export default About

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      slug: 'about',
    },
  })

  return {
    props: {
      pageData: data.page,
    },
  }
}
