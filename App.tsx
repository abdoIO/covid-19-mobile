import 'react-native-gesture-handler';
import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { colors } from './src/theme';
import HomeScreen from './src/screens/Home/HomeScreen';
import BotScreen from './src/screens/Bot/BotScreen';

const Stack = createStackNavigator();

const HomeScreenOptions = {
  header: () => <View />,
};

const BotScreenOptions = {
  title: '',
  headerLeft: () => <BackButton />,
}

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack} style={{ paddingHorizontal: 10 }}>
      <Feather name="arrow-left" size={34} color={colors.blue400} />
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions} />
        <Stack.Screen name="Bot" component={BotScreen} options={BotScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
