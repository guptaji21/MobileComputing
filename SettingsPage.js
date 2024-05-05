// Author : Surbhi Gupta
// Refernces  : https://buttercms.com/blog/implement-dark-mode-react-native/
//https://reactnative.dev/docs/appearance
//https://reactnative.dev/docs/switch/
//https://blog.logrocket.com/comprehensive-guide-dark-mode-react-native/
//https://reactnative.dev/docs/asyncstorage 

import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsPage = ({ navigation }) => {
    const [darkMode, setDarkMode] = useState(false); //flag

    
    useEffect(() => { // load the dark mode setting 
        loadSettings();
    }, []);

    // Function to load the dark mode 
    const loadSettings = async () => {
        try {
            const value = await AsyncStorage.getItem('darkMode');
            if (value !== null) {
                
                setDarkMode(JSON.parse(value)); // Set the dark mode state accordigly
            }
        } catch (e) {
            Alert.alert('Error', 'Failed to load the settings.');
        }
    };

    
    const saveSettings = async () => { // Function to save the dark mode setting in the storage
        try {
           
            await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode)); // Store the dark mode setting 
            Alert.alert('Success', 'Settings saved successfully!');
        } catch (e) {
            Alert.alert('Error', 'Failed to save the settings.');
        }
    };

    return (
        <View style={[styles.container, darkMode && styles.darkModeContainer]}>
            <Text style={[styles.headerText, darkMode && styles.darkModeText]}>Settings</Text>
            <View style={styles.settingContainer}>
                <Text style={[styles.settingDescription, darkMode && styles.darkModeText]}>Enable Dark Mode:</Text>
                {}
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                   
                    onValueChange={() => setDarkMode(previousState => !previousState)}
                    value={darkMode} // Value of the switch based on dark mode state
                />
            </View>
            {}
            <Button title="Save Settings" onPress={saveSettings} color="#841584" />
            {}
            <Button title="Go Back" onPress={() => navigation.goBack()} color="#841584" />
        </View>
    );
};


// Define the styles --- > Working on keeping it seprate. The work in on for it! --> AppStyles.js is created already! 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    darkModeContainer: {
        backgroundColor: '#000', //  black background for dark mode
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    darkModeText: {
        color: '#FFF', //  white text color for dark mode
    },
    settingContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    settingDescription: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default SettingsPage;
