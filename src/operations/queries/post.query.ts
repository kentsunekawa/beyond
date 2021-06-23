import { gql } from '@apollo/client'

export const POST_QUERY = gql`
  query Post($slug: String) {
    post(where: { slug: $slug }) {
      title
      slug
      content
      date
      coverImage {
        url
      }
      tags
      seo {
        description
        title
        image {
          url
        }
      }
    }
  }
`
