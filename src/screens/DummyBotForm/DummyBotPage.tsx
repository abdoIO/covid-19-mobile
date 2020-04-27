import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BigButton from '../../components/BigButton';

import { colors } from '../../theme';

const DummyBotPage = ({ question }) => {
  const { questionText, inputType, options, nextRoute } = question;

  const renderInputComponent = () => {
    const [value, setValue] = useState('');

    switch (inputType) {
      case 'text':
        return (
          <TextInput
            style={styles.textinput}
            value={value}
            onChangeText={setValue}
            autoFocus
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        );

      case 'radio':
        break;
      case 'picker':
        break;
      case 'checkbox':
        break;

      default:
        break;
    }
  };

  const navigation = useNavigation();

  const onSubmit = () => {
    const navigationRoute = nextRoute !== 'end' ? nextRoute : 'FinishScreen';
    navigation.navigate(navigationRoute);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questionText}</Text>
      </View>
      <View style={styles.answerContainer}>{renderInputComponent()}</View>
      <View style={styles.submitButtonContainer}>
        <BigButton title={'Next'} onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 300,
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 30,
  },
  questionText: {
    fontSize: 25,
    marginHorizontal: 30,
  },
  answerContainer: {
    flex: 5,
  },
  submitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // render components
  textinput: {
    height: 60,
    backgroundColor: '#DCDCDC',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default DummyBotPage;
