import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBotComponent from 'react-native-chatbot';
import { useNavigation } from '@react-navigation/native';

import steps from './Steps';

import { colors } from '../../theme';

const ChatBot = () => {
  const navigation = useNavigation();

  const botAvatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFeeJsnL6NEtJ8fIfF0Bnb_Lsdg4f3p7H2jeo2t0LQ4vCu4YtE&usqp=CAU';

  return (
    <View style={styles.container}>
      <ChatBotComponent
        steps={steps}
        submitButtonStyle={{
          backgroundColor: colors.blue400,
          borderRadius: 30,
          marginVertical: 5,
          marginHorizontal: -5,
        }}
        submitButtonContent="إرسال"
        placeholder="أكتب هنا"
        optionBubbleColor={colors.blue400}
        keyboardVerticalOffset={100}
        botAvatar={botAvatar}
        footerStyle={{ borderTopColor: '#fff' }}
        bubbleStyle={{ backgroundColor: colors.blue400 }}
        botBubbleColor={colors.blue400}
        handleEnd={({ renderedSteps, steps, values }) => {
          navigation.navigate('Result', { renderedSteps, steps, values });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 50,
  },
});

export default ChatBot;
