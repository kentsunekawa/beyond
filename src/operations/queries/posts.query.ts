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
  query PostsSlug($stage: Stage!) {
    posts(stage: $stage) {
      slug
    }
  }
`

export const POST_CORE_FIELDS = gql`
  fragment PostCoreFields on Post {
    createdAt
    updatedAt
    date
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
  query Posts($first: Int, $stage: Stage!) {
    postsConnection(first: $first, stage: $stage, orderBy: date_DESC) {
      ...CommonPostFields
    }
  }
`

export const FILTERD_POSTS_QUERY = gql`
  ${COMMON_POSTS_FIELDS}
  query Posts(
    $keyword: String
    $first: Int
    $last: Int
    $skip: Int
    $orderBy: PostOrderByInput
    $after: String
    $before: String
    $stage: Stage!
  ) {
    postsConnection(
      stage: $stage
      first: $first
      last: $last
      skip: $skip
      orderBy: $orderBy
      after: $after
      before: $before
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
    $last: Int
    $skip: Int
    $orderBy: PostOrderByInput
    $tags: [String!]
    $after: String
    $before: String
    $stage: Stage!
  ) {
    postsConnection(
      stage: $stage
      first: $first
      last: $last
      skip: $skip
      orderBy: $orderBy
      after: $after
      before: $before
      where: {
        AND: [{ title_contains: $keyword }, { tags_contains_some: $tags }]
      }
    ) {
      ...CommonPostFields
    }
  }
`
