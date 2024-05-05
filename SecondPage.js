// Author : Surbhi Gupta
// References: 
// - React Native AsyncStorage: https://reactnative.dev/docs/asyncstorage
// - Expo Image Picker: https://docs.expo.dev/versions/latest/sdk/imagepicker/
// - GitHub issues and solutions: https://github.com/expo/expo/issues/25705
// - Stack Overflow discussions on usage: https://stackoverflow.com/questions/75844132/expo-image-picker-with-asyncstorage 

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Importing ImagePicker from Expo
import { Video } from 'expo-av'; // Importing Video component from Expo AV
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importing AsyncStorage for local storage

// MediaDemo is for displaying a media 
export default function MediaDemo() {
    const [media, setMedia] = useState([]); // State to hold media items
    const [loading, setLoading] = useState(false); // State to manage loading status

    useEffect(() => {
        // Function to load media from AsyncStorage 
        const loadMedia = async () => {
            setLoading(true);
            try {
                const storedMedia = await AsyncStorage.getItem('media'); // Attempt to retrieve media from local storage
                setMedia(storedMedia ? JSON.parse(storedMedia) : []); // Parse stored media or set to empty if none
            } catch (error) {
                Alert.alert('Loading Error', 'Failed to load media.'); // Alert in case of loading error
            }
            setLoading(false);
        };

        loadMedia(); 
    }, []);

    // Function to handle picking media from device 
    const handleMediaPick = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Requesting  permissions
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Media library permissions are required.'); //  if permissions are denied, alert
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({ //Basic syntax
            mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow all media types        
            quality: 1, 
        });

        if (!result.cancelled && result.assets) {
           
            const updatedMedia = [...media, ...result.assets.map(asset => ({  // Update media state , if new media is picked
                id: asset.uri, 
                uri: asset.uri, 
                type: asset.mediaType 
            }))];
            setMedia(updatedMedia); // Set new media state
            await AsyncStorage.setItem('media', JSON.stringify(updatedMedia)); // Store updated media
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>My Gallery</Text>
            <TouchableOpacity style={styles.button} onPress={handleMediaPick}>
                <Text style={styles.buttonText}>Add Media</Text>
            </TouchableOpacity>
            {loading ? (
                <ActivityIndicator size="large" color="#841584" /> 
            ) : (
                <ScrollView contentContainerStyle={styles.gallery}>
                    {media.map(({ id, uri, type }) => (
                        <View key={id} style={styles.mediaContainer}>
                            {type === 'video' ? (
                                <Video
                                    source={{ uri }}
                                    resizeMode="cover"
                                    shouldPlay={false}
                                    isLooping={false}
                                    useNativeControls
                                    style={styles.media}
                                />
                            ) : (
                                <Image
                                    source={{ uri }}
                                    style={styles.media}
                                />
                            )}
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

// Define the styles --- > Working on keeping it seprate. The work in on for it! --> AppStyles.js is created already! 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC0CB', 
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#444', 
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#841584', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff', 
        fontSize: 16,
    },
    gallery: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        paddingBottom: 20,
    },
    mediaContainer: {
        width: '45%',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    media: {
        width: '100%',
        height: 150,
        backgroundColor: 'black', 
    },
});
