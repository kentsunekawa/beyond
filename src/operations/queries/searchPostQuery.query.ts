import { gql } from '@apollo/client'

export const GET_SEARCH_POST_QUERY = gql`
  query GetSearchPostQuery {
    serchPostQuery @client
  }
`
