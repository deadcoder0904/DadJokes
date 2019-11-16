import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Error } from './Error'
import { CREATE_JOKE_MUTATION } from './graphql/mutations/createJoke'
import { LIST_ALL_JOKES_QUERY } from './graphql/queries/jokes'

const saveJoke = (joke, changeJoke, createJoke) => {
  if (joke.trim() === '') {
    return
  }
  createJoke({
    variables: { joke },
    update: (cache, { data }) => {
      const { jokes } = cache.readQuery({
        query: LIST_ALL_JOKES_QUERY
      })

      cache.writeQuery({
        query: LIST_ALL_JOKES_QUERY,
        data: {
          jokes: jokes.concat(data.createJoke)
        }
      })
    }
  })
  Alert.alert('Joke added to the database')
  changeJoke('')
}

export const CreateJoke = () => {
  const [joke, changeJoke] = useState('')
  const [createJoke, { error, data }] = useMutation(CREATE_JOKE_MUTATION)
  if (error) {
    return <Error />
  }
  return (
    <View style={styles.wrapper}>
      <Input
        placeholder='Enter the joke'
        value={joke}
        onChangeText={changeJoke}
      />
      <Button
        type='outline'
        title='Save Joke'
        onPress={() => saveJoke(joke, changeJoke, createJoke)}
        containerStyle={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 8
  },
  button: {
    marginTop: 16,
    padding: 4
  }
})
