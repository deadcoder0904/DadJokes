import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import AddJokeScreen from '../screens/AddJokeScreen'
import HomeScreen from '../screens/HomeScreen'

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  { headerMode: 'none' }
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const AddJokeStack = createStackNavigator(
  { AddJoke: AddJokeScreen },
  { headerMode: 'none' }
)

AddJokeStack.navigationOptions = {
  tabBarLabel: 'Add Joke',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-add-circle'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  AddJokeStack
})
