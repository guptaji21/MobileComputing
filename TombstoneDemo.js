
// Author : Surbhi Gupta 
// Reference https://reactnative.dev/docs/appstate](https://reactnative.dev/docs/appstate)
//https://react-native-async-storage.github.io/async-storage/](https://react-native-async-storage.github.io/async-storage/)
//https://react.dev/reference/react/useState](https://react.dev/reference/react/useState)
//https://reactnativeschool.com/lessons/managing-app-state-in-react-native](https://reactnativeschool.com/lessons/managing-app-state-in-react-native)
//https://medium.com/flutter/optimizing-app-lifecycle-8820b35c9a7e](https://medium.com/flutter/optimizing-app-lifecycle-8820b35c9a7e)


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, AppState, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TombstoneDemo() {
    const [userInput, setUserInput] = useState('');

    
    useEffect(() => {// Load saved input 
        loadUserInput();

        
        const backgroundSubscription = AppState.addEventListener('change', handleAppStateChange);//  app state changes

        return () => {
            backgroundSubscription.remove();
        };
    }, []);

    
    const handleAppStateChange = (state) => {// handle app state changes
        if (state === 'background') {
            saveUserInput();
        }
    };

   
    const loadUserInput = async () => { // Load user input from storage
        try {
            const savedInput = await AsyncStorage.getItem('UserInput');
            if (savedInput !== null) {
                setUserInput(savedInput);
            }
        } catch (error) {
            console.error('Error loading user input', error);
        }
    };

   
    const saveUserInput = async () => {  // Save user input to storage
        try {
            await AsyncStorage.setItem('UserInput', userInput);
        } catch (error) {
            console.error('Error saving user input', error);
        }
    };

   
    const handleUserInputChange = (input) => {  // Update user input state and save it to storage
        setUserInput(input);
        saveUserInput();
    };

   
    const clearUserInput = async () => {  // Clear user input from state and storage
        try {
            setUserInput('');
            await AsyncStorage.removeItem('UserInput');
        } catch (error) {
            console.error('Error clearing user input', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter your text text:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Type here"
                value={userInput}
                onChangeText={handleUserInputChange}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FDF5E6',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    output: {
        fontSize: 20,
        color: '#333',
    },
});
