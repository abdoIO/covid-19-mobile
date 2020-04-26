import React from 'react';
import { View, Text, Button } from 'react-native';
const InitialFormPage = ({
  navigation,
  route: {
    params: { callback },
  },
}) => (
  <View style={{ flex: 1 }}>
    <Text>Get ready to start!</Text>
    <Button
      title="Start!"
      onPress={() =>
        navigation.navigate('FormPage', {
          question: 'question 1',
          callback: (answer) => callback(answer),
        })
      }
    />
  </View>
);

export default InitialFormPage;
