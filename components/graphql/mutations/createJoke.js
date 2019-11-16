import { gql } from 'apollo-boost'

export const CREATE_JOKE_MUTATION = gql`
  mutation createJoke($joke: String!) {
    createJoke(data: { joke: $joke }) {
      id
      joke
    }
  }
`
