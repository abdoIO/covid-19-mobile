import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native';

type InputType = 'picker' | 'radio' | 'checkbox' | 'text';

type FormPageProps = {
  question: string;
  inputType?: InputType;
  callback: (answer: string) => void;
}

// const BubbleText = (text) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={{ backgroundColor: 'blue' }}>
//     <Text style={{ color: 'white' }}>{text}</Text>
//   </TouchableOpacity>
// )

const renderInputComponent = (inputType, callback) => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={value} onChangeText={setValue} />
      <Button title={'submit'} onPress={() => callback(value)} />
    </>
  );
  // switch (inputType) {
  //   case 'text':

  //     break;
  //   case 'radio':

  //     break;
  //   case 'picker':

  //     break;
  //   case 'checkbox':

  //     break;

  //   default:
  //     break;
  // }
}

const FormPage = ({ route }) => {
  const { question } = route.params;
  const { inputType } = route.params;
  const { callback } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.answerContainer}>
        {renderInputComponent(inputType, callback)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  answerContainer: {
    flex: 1,
  },
});

export default FormPage;
