import { gql } from '@apollo/client'

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
    pageSize
  }
`

export const POSTS_SLUG_QUERY = gql`
  query {
    posts(stage: DRAFT) {
      slug
    }
  }
`

export const POST_CORE_FIELDS = gql`
  fragment PostCoreFields on Post {
    createdAt
    updatedAt
    slug
    title
    tags
  }
`

export const SEO_CORE_FIELDS = gql`
  fragment SeoCoreFields on Seo {
    title
    description
  }
`

export const COMMON_POSTS_FIELDS = gql`
  ${PAGE_INFO}
  ${SEO_CORE_FIELDS}
  ${POST_CORE_FIELDS}
  fragment CommonPostFields on PostConnection {
    edges {
      node {
        ...PostCoreFields
        seo {
          ...SeoCoreFields
        }
      }
    }
    pageInfo {
      ...PageInfo
    }
    aggregate {
      count
    }
  }
`

export const POSTS_QUERY = gql`
  ${COMMON_POSTS_FIELDS}
  query Posts($first: Int) {
    postsConnection(first: $first) {
      ...CommonPostFields
    }
  }
`

export const FILTERD_POSTS_QUERY = gql`
  ${COMMON_POSTS_FIELDS}
  query Posts(
    $keyword: String
    $first: Int
    $skip: Int
    $orderBy: PostOrderByInput
  ) {
    postsConnection(
      stage: PUBLISHED
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: { title_contains: $keyword }
    ) {
      ...CommonPostFields
    }
  }
`

export const FILTERD_POSTS_QUERY_WITH_TAGS = gql`
  ${COMMON_POSTS_FIELDS}
  query Posts(
    $keyword: String
    $first: Int
    $skip: Int
    $orderBy: PostOrderByInput
    $tags: [String!]
  ) {
    postsConnection(
      stage: PUBLISHED
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: {
        AND: [{ title_contains: $keyword }, { tags_contains_some: $tags }]
      }
    ) {
      ...CommonPostFields
    }
  }
`
