import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BotScreen from './src/screens/BotScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <View /> }} />
        <Stack.Screen name="Bot" component={BotScreen} options={{ title: 'Chat Bot' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
