import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from '../../../components/Card';

const News = () => {
  return (
    <Card>
      <Text style={styles.title}>News</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  },
});

export default News;
