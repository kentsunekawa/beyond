import { GetStaticProps } from 'next'

import Head from 'components/templates/Head'

import Base from 'components/templates/Base'
import PageTitle from 'components/atoms/PageTitle'
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
        <PageTitle title={pageData.title} />
        <div></div>
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

  console.log(data.page.content.raw)

  return {
    props: {
      pageData: data.page,
    },
  }
}
