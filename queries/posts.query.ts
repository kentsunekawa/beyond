import { gql } from '@apollo/client'

export const POSTS_SLUG_QUERY = gql`
  query {
    posts {
      slug
    }
  }
`

export const POSTS_QUERY = gql`
  query {
    posts {
      slug
      title
    }
  }
`
