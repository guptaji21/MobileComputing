import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SecondPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Huraay!</Text>
      <Text style={styles.contentText}>You are on the second page.</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
        color="#841584" 
      />
    </View>
  );
}

// Learning to put some styles!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC0CB', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  contentText: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20, 
  },
});
