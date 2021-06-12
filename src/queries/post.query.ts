import { gql } from '@apollo/client'

export const POST_QUERY = gql`
  query Post($slug: String) {
    post(where: { slug: $slug }) {
      title
      content {
        html
        markdown
        raw
        text
      }
    }
  }
`
