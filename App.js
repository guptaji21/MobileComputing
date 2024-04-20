import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import SettingsPage from './SettingsPage';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} options={{ title: 'Welcome' }}/>
                <Stack.Screen name="Settings" component={SettingsPage} options={{ title: 'Settings' }}/>
                <Stack.Screen name="Page 2" component={SecondPage} options={{ title: 'Page 2' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
