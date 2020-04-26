import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions, useNavigation } from '@react-navigation/native';

import FormPage from './FormPage';
import useFetch from 'use-http';

const Stack = createStackNavigator();

const InitialFormPage = ({ navigation, route: { params: { callback } } }) => (
  <View style={{ flex: 1 }}>
    <Text>Get ready to start!</Text>
    <Button title="Start!" onPress={
      () => navigation.navigate('FormPage',
        { question: 'question 1', callback: (answer) => callback(answer) })
    } />
  </View>
)

const BotForm = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [requestParams, setRequestParams] = useState({
      age: null,
      sex: "",
      evidence: [],
  })
  const { get, post, response, loading, error } = useFetch(
    'http://covid19sm-env.eba-bsrjzpn3.us-east-2.elasticbeanstalk.com/covid19'
  );

  const navigationCallback = (answer) => {
    console.log('step: ', step)
    console.log('answer: ', answer)
    console.log('requestParams: ', requestParams)

    if (step > 3) {
      post('/questions', requestParams).then((data) => {
        console.log(data);
        setCurrentQuestion({ question: data.question, shouldStop: data.should_stop })
        setStep(previousState => previousState + 1);
      })
    } else {
      switch (step) {
        case 1:
          setRequestParams({ ...requestParams, name: answer })
          setStep(previousState => previousState + 1);
          break;

        case 2:
          setRequestParams({ ...requestParams, age: answer })
          setStep(previousState => previousState + 1);
          break;

        case 3:
          setRequestParams({ ...requestParams, sex: answer })
          break;
      }
    }
  }

  useEffect(() => {
    

  }, [])

  useEffect(() => {
    let question;
    switch (step) {
      case 1:
        question = "What's your name";
        break;

      case 2:
        question = "How old are you?";
        break;

      case 3:
        question = "What's your sex";
        break;

      default:
        break;
    }

    navigation.push('FormPage', { question: `${question}, step: ${step} `, inputType: '', callback: navigationCallback });
  }, [step, requestParams])

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialFormPage"
          component={InitialFormPage}
          initialParams={{ callback: navigationCallback }}
        />
        <Stack.Screen
          name="FormPage"
          component={FormPage}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BotForm;