import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useFetch from 'use-http';

import Card from '../../../components/Card';

const News = () => {
  const { loading, error, data } = useFetch(
    'http://newsapi.org/v2/everything?apiKey=68ddf899b505404e960daf512baabe76&q=كورونا مصر',
    []
  ); // onMount (GET by default)

  return (
    <Card>
      <Text style={styles.title}>News</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

export default News;
