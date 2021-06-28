import { gql } from '@apollo/client'

export const GET_PAGE_DATA = gql`
  query Page($slug: String) {
    page(where: { slug: $slug }) {
      title
      content {
        markdown
        html
        text
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
  }
`
