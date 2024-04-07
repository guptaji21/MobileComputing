import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello World from HomePage!</Text>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate('SecondPage')}
      />
    </View>
  );
}
