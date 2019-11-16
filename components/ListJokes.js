import { useMutation, useQuery } from '@apollo/react-hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Error } from './Error'
import { DELETE_JOKE_MUTATION } from './graphql/mutations/deleteJoke'
import { LIST_ALL_JOKES_QUERY } from './graphql/queries/jokes'
import { Loading } from './Loading'

const removeJoke = (id, deleteJoke) => {
  deleteJoke({
    variables: {
      id
    },
    update: (cache, { data }) => {
      const { jokes } = cache.readQuery({
        query: LIST_ALL_JOKES_QUERY
      })
      cache.writeQuery({
        query: LIST_ALL_JOKES_QUERY,
        data: {
          jokes: jokes.filter(joke => joke.id !== id)
        }
      })
    }
  })
}

export const ListJokes = () => {
  const { loading, error, data } = useQuery(LIST_ALL_JOKES_QUERY)
  const [deleteJoke] = useMutation(DELETE_JOKE_MUTATION)

  if (loading) return <Loading />

  if (error) return <Error />

  const jokes = data.jokes
  return (
    <View style={styles.container}>
      {!jokes.length ? (
        <Text h4 h4Style={styles.center}>
          No jokes in the database. Add one :)
        </Text>
      ) : (
        jokes.map((item, i) => (
          <ListItem
            key={i}
            title={item.joke}
            bottomDivider
            rightIcon={{
              name: 'delete',
              onPress: () => removeJoke(item.id, deleteJoke)
            }}
          />
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  center: {
    textAlign: 'center',
    color: 'red'
  }
})
