import { gql } from '@apollo/client'

export const POST_QUERY = gql`
  query Post($slug: String, $stage: Stage!) {
    post(where: { slug: $slug }, stage: $stage) {
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
