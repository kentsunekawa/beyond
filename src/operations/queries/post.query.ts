import { gql } from '@apollo/client'

export const POST_QUERY = gql`
  query Post($slug: String) {
    post(where: { slug: $slug }) {
      createdAt
      updatedAt
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
      relationPosts(first: 5) {
        title
        slug
      }
    }
  }
`
