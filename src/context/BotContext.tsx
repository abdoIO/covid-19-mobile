import React, { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BotContext = createContext({
  postInitialRequestParams: (x) => {},
  setSteps: (x) => {},
  stepsState: [],
});

export default BotContext;
