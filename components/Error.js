import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export const Error = () => (
  <View>
    <Text h3 h3Style={styles.error}>
      Sorry, looks like we've run into an error
    </Text>
  </View>
)

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
})
