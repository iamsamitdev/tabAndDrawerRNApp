import { Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Locations = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Locations screen!</Text>
  </View>
)

const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Locations} />
    </Stack.Navigator>
  )
}

export default LocationsStackNavigator