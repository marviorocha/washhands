 import React, {Component} from 'react';
 import {Text, View, Button} from 'react-native';
 


function HomeScreen({ navigation }) {
  return (
    <View >
      <Text>Home Screen</Text>
      <Button
        title="Stap One Tab"
        onPress={() => navigation.navigate('Stap')}
      />
    </View>
  );
}
export default HomeScreen;