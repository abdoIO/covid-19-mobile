import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';

var ChatBot;

if (Platform.OS !== 'web') {
  ChatBot = require('react-native-chatbot').default;
} else {
  ChatBot = require('react-simple-chatbot').default;
}

import { colors } from '../../theme';

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
      message: '3amel eh ya {previousValue}',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'ta3ban', trigger: '5' },
        { value: 2, label: 'ta3ban nek', trigger: '5' },
        { value: 3, label: 'ana saleem', trigger: '5' },
      ],
      trigger: '5',
    },
    {
      id: '5',
      message: 'roo7 etnak',
      end: true,
    },
  ];

  const botAvatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFeeJsnL6NEtJ8fIfF0Bnb_Lsdg4f3p7H2jeo2t0LQ4vCu4YtE&usqp=CAU';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {Platform.OS !== 'web' ? (
          <ChatBot
            steps={steps}
            botAvatar={botAvatar}
            keyboardVerticalOffset={90}
            submitButtonStyle={{
              backgroundColor: colors.blue400,
              borderRadius: 30,
              marginVertical: 5,
              marginHorizontal: -5,
            }}
            botBubbleColor={colors.blue400}
            style={{ borderbottomColor: 'white' }}
            optionBubbleColor={colors.blue400}
          />
        ) : (
            <ChatBot
              steps={steps}
              botBubbleColor={colors.blue400}
              botAvatar={botAvatar}
              headerComponent
              width="90vw"
              submitButtonStyle={{
                backgroundColor: colors.blue400,
                borderRadius: 30,
                marginVertical: 5,
                marginHorizontal: -5,
              }}
              style={{ borderbottomColor: 'white' }}
              inputStyle={{}}
              bubbleStyle={{ backgroundColor: colors.blue400 }}></ChatBot>
          )}
      </View>
    </SafeAreaView>
  );
};

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
