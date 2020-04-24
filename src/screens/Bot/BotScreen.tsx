import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Platform, TouchableOpacity, Text } from 'react-native';
import useFetch from 'use-http';

import BotContext from '../../context/BotContext'

import { colors } from '../../theme';
import initalSteps from '../../data/bot-steps';

var ChatBot;

if (Platform.OS !== 'web') {
  ChatBot = require('react-native-chatbot').default;
} else {
  ChatBot = require('react-simple-chatbot').default;
}

const botAvatar =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFeeJsnL6NEtJ8fIfF0Bnb_Lsdg4f3p7H2jeo2t0LQ4vCu4YtE&usqp=CAU';

const BotScreen = () => {
  const [steps, setSteps] = useState(initalSteps);
  const [InitialRequestParams, setInitialRequestParams] = useState({});

  // useEffect(() => {
  //   const { loading, error, data } = useFetch(
  //     '/covid19/questions',
  //     []
  //   );
  // }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <BotContext.Provider value={{
        InitialRequestParams,
        setInitialRequestParams,
      }}>
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
      </BotContext.Provider>
    </SafeAreaView>
  )
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
