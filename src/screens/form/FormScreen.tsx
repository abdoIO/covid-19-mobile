import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import useFetch from 'use-http';

const Form = () => {
  const { get, post, response, loading, error } = useFetch(
    'http://localhost:8080/covid19'
  );

  const postInitialRequestParams = async (params) => {
    return await post('/questions', {
      ...params,
    });
  };

  // const response = async () => {
  //   // post request to get questions
  //   return await postInitialRequestParams({
  //     age: +steps['4'].value,
  //     sex: steps['6'].value === 'ذكر' ? 'male' : 'female',
  //     evidence: [],
  //   });
  // };

  const steps = [
    {
      id: '1',
      type: 'input',
      question: 'ما اسمك؟',
      next: '2',
    },

    {
      id: '2',
      type: 'picker',
      question: 'كم عمرك؟',
      next: '3',
    },
    {
      id: '3',
      type: 'choice',
      question: 'ما هو جنسك؟',
      next: '4',
    },
  ];

  const renderQuestionComponent = (type) => {
    switch (type) {
      case 'input':
        return <TextInput style={styles.input} />;
        break;

      case 'choice':
        return (
          <>
            <Button title="Yes" onPress={(x) => {}}></Button>
            <Button title="No" onPress={(x) => {}}></Button>
          </>
        );
        break;

      case 'picker':
        return (
          <Picker selectedValue="java" style={styles.picker}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      {steps &&
        steps.map((step) => {
          return (
            <View>
              <Text style={styles.question}>{step.question}</Text>
              <Text style={styles.explanation}></Text>

              {renderQuestionComponent(step.type)}
            </View>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
  question: {
    textAlign: 'center',
  },
  explanation: {},
  input: {},
  picker: {
    height: 50,
    width: 100,
  },
});

export default Form;
