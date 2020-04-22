import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoWithAction from '../../components/InfoWithAction';

const HowTo = () => (
  <InfoWithAction buttonLabel="Next" buttonOnPress={() => null}>
    <Text>Zeby</Text>
  </InfoWithAction>
);

export default HowTo;

const styles = StyleSheet.create({});
