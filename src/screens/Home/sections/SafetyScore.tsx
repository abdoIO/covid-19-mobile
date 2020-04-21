import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from '../../../components/Card';

const SafetyScore = () => {
  return (
    <Card>
      <Text style={styles.title}>Safety Score</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  },
});

export default SafetyScore;
