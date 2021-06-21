import { gql } from '@apollo/client'

export const POSTS_SLUG_QUERY = gql`
  query {
    posts(stage: DRAFT) {
      slug
    }
  }
`

export const FILTERD_POSTS_QUERY_NO_TAGS = gql`
  query {
    posts(
      stage: PUBLISHED
      first: 10
      skip: 0
      orderBy: createdAt_ASC
      where: { title_contains: "" }
    ) {
      slug
      title
      tags
    }
  }
`

export const FILTERD_POSTS_QUERY = gql`
  query Posts(
    $keyword: String
    $first: Int
    $skip: Int
    $orderBy: PostOrderByInput
  ) {
    posts(
      stage: PUBLISHED
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: { title_contains: $keyword }
    ) {
      slug
      title
      tags
    }
  }
`

export const POSTS_QUERY = gql`
  query {
    posts(stage: PUBLISHED, first: 10, skip: 0, orderBy: createdAt_ASC) {
      slug
      title
      tags
    }
  }
`
