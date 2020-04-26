import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';
import useFetch from 'use-http';

import { colors } from '../../theme';

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

  const renderQuestionComponent = (type, choices) => {
    switch (type) {
      case 'input':
        return (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="اسمك"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        );
        break;

      case 'choice':
        return (
          <>
            {choices.map((choice) => {
              return (
                <View>
                  <Button
                    title={choice.label}
                    onPress={(x) => {
                      choice.value;
                    }}
                  />
                </View>
              );
            })}
          </>
        );
        break;

      case 'picker':
        return (
          <Picker selectedValue="22" style={styles.picker}>
            <Picker.Item label="22" value="java" />
            <Picker.Item label="33" value="js" />
          </Picker>
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      {FormSteps &&
        FormSteps.map((step) => {
          return (
            <View>
              <Text style={styles.question}>{step.question}</Text>
              <Text style={styles.explanation}></Text>
              <View style={styles.container}>
                {renderQuestionComponent(step.type, step.choices)}
              </View>
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 200,
    margin: 15,
    height: 40,
    borderColor: colors.blue400,
    borderWidth: 1,
  },
  picker: {
    position: 'relative',
    width: 200,
    bottom: 50,
    height: 150,
  },
});

export default Form;
