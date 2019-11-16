import { gql } from 'apollo-boost'

export const DELETE_JOKE_MUTATION = gql`
  mutation deleteJoke($id: ID) {
    deleteJoke(where: { id: $id }) {
      id
      joke
    }
  }
`
