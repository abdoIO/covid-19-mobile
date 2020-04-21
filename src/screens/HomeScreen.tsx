import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';

const HomeScreen = ({ navigation }) => {
  const navigateToBotScreen = () => navigation.navigate('Bot');

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <BigButton
        title="Start Self Diagnosis"
        onPress={navigateToBotScreen}
      />
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
  
export default HomeScreen;
