import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions, useNavigation } from '@react-navigation/native';
import useFetch from 'use-http';

import FormPage from './FormPage';
import InitialFormPage from './InitialFormPage';

const Stack = createStackNavigator();

const BotForm = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({
    conditions: [],
    extras: {},
    question: {},
    shouldStop: false,
  });
  const [requestParams, setRequestParams] = useState({
    age: null,
    sex: '',
    evidence: [],
  });
  const { get, post, response, loading, error } = useFetch(
    'http://covid19sm-env.eba-bsrjzpn3.us-east-2.elasticbeanstalk.com/covid19'
  );

  const navigationCallback = (answer, questionType) => {
    console.log(questionType);
    if (step > 3) {
      post('/questions', requestParams).then((data) => {
        setCurrentQuestion({
          conditions: data.conditions,
          extras: data.extras,
          question: data.question,
          shouldStop: data.should_stop,
        });

        setStep((previousState) => previousState + 1);
      });
    } else {
      switch (step) {
        case 1:
          setRequestParams({ ...requestParams, name: answer });
          setStep((previousState) => previousState + 1);
          break;

        case 2:
          setRequestParams({ ...requestParams, age: answer });
          setStep((previousState) => previousState + 1);
          break;

        case 3:
          setRequestParams({ ...requestParams, sex: answer });
          setStep((previousState) => previousState + 1);
          break;
      }
    }
  };

  useEffect(() => {
    if (step === 4) {
      post('/questions', requestParams).then((data) => {
        setCurrentQuestion({
          conditions: data.conditions,
          extras: data.extras,
          question: data.question,
          shouldStop: data.should_stop,
        });
      });
    }
  }, [requestParams]);

  useEffect(() => {
    let question, type;
    switch (step) {
      case 1:
        question = "What's your name";
        type = 'text';
        break;

      case 2:
        question = 'How old are you?';
        type = 'text';
        break;

      case 3:
        question = "What's your sex";
        type = 'text';
        break;

      default:
        break;
    }

    navigation.push('FormPage', {
      callback: navigationCallback,
      explanation: currentQuestion.question.text,
      inputType: type,
      question: `${question || currentQuestion.question.text}, step: ${step} `,
      questionType: currentQuestion.question.type,
      subQuestions: currentQuestion.question.items,
    });
  }, [step, currentQuestion]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="InitialFormPage"
            component={InitialFormPage}
            initialParams={{ callback: navigationCallback }}
          />
          <Stack.Screen name="FormPage" component={FormPage} />
        </Stack.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BotForm;
