import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FormPage from './FormPage';

const Stack = createStackNavigator();

const navigationCallback = (answer, navigation) => {

  let step = 1;
  step++;
  // fetch api
  navigation.push('FormPage', { question: `question ${step} `, inputType: '', callback: navigationCallback })
}

const InitialFormPage = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Text>Get ready to start!</Text>
    <Button title="Start!" onPress={
      () => navigation.navigate('FormPage',
        { question: 'question 1', callback: (answer) => navigationCallback(answer, navigation) })
    } />
  </View>
)

const BotForm = () => (
  <View style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen
        name="InitialFormPage"
        component={InitialFormPage}
      />
      <Stack.Screen
        name="FormPage"
        component={FormPage}
      />
    </Stack.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BotForm;