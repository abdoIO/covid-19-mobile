import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetch from 'use-http';

import Card from '../../../components/Card';

const News = () => {
  const options = {
    data: [], // default for `data` will be an array instead of undefined
  };

  const { loading, error, data } = useFetch(
    'https://newsapi.org/v2/everything?apiKey=68ddf899b505404e960daf512baabe76&q=كورونا مصر',
    []
  );

  return (
    <View style={styles.section}>
      {!loading &&
        data.articles.map((article) => {
          return (
            <Card>
              <Text>{article.title}</Text>
            </Card>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
  },
});

export default News;
