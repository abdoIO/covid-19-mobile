import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BigButton from '../components/BigButton';

const BotScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bot Screen</Text>
      <BigButton title="Go Bot Screen" onPress={navigation.navigate('Bot')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
export default BotScreen;
