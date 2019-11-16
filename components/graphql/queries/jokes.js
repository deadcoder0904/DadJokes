import { gql } from 'apollo-boost'

export const LIST_ALL_JOKES_QUERY = gql`
  query jokes {
    jokes {
      id
      joke
    }
  }
`
