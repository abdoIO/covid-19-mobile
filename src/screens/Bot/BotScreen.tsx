import React from 'react';
import ChatBot from 'react-native-chatbot';
import { StyleSheet, SafeAreaView, View } from 'react-native';

const BotScreen = () => {
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Zeby 3alek ya {previousValue}',
      trigger: '4',
    },
    {
      id: '4',
      message: 'ha2aw aw aw aw aw',
      end: true,
    },
  ]
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <ChatBot steps={steps} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BotScreen;
