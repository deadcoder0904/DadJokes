import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { ListJokes } from '../components/ListJokes'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text h1 h1Style={styles.h1}>
          Dad Jokes
        </Text>
        <ListJokes />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  }
})

export default HomeScreen
