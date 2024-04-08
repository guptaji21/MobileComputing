import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import SecondPage from './SecondPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Page 1" component={HomePage} />
        <Stack.Screen name="Page 2" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
