import React from 'react';
import { Button } from 'react-native';

export default ({ onPress, title }) => (
  <Button
    title={title}
    onPress={onPress}
  />
)