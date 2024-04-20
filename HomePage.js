// Author : Surbhi Gupta 
// Reference https://blog.codemagic.io/how-to-build-react-native-ios-app-on-windows/ 
//https://reactnative.dev/docs/getting-started 
//https://reactnative.dev/
//https://docs.expo.dev/tutorial/create-your-first-app/ 
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Surbhi's Hello World App!</Text>
      <Text style={styles.contentText}>This is the Welcome page!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Click to see what's next?"
          onPress={() => navigation.navigate('Page 2')}
          color="#841584" // This sets the button color
        />
      </View>
    </View>
  );
}

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC0CB', 
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#666', 
    marginBottom: 30,
    textAlign: 'center',
  }
});
