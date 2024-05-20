// Author : Surbhi Gupta 
// Reference https://blog.codemagic.io/how-to-build-react-native-ios-app-on-windows/ 
//https://reactnative.dev/docs/getting-started 
//https://reactnative.dev/
//https://docs.expo.dev/tutorial/create-your-first-app/ 
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Surbhi's First App</Text>
      <Text style={styles.contentText}>Check out the options below:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF6F61' }]}
          onPress={() => navigation.navigate('Page 2')}>
          <AntDesign name="pluscircleo" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Add Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6B5B95' }]}
          onPress={() => navigation.navigate('Settings')}>
          <AntDesign name="setting" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4682B4' }]}
          onPress={() => navigation.navigate('TombstoneDemo')}>
          <Feather name="type" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Input Text</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF5E6',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '30%',
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginHorizontal: 5, 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
  },
});
