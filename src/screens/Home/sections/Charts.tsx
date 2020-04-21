import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from '../../../components/Card';

const Charts = () => {
  return (
    <Card>
      <Text style={styles.title}>Charts</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  },
});

export default Charts;
