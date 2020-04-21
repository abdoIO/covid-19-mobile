import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import useFetch from 'use-http';
import moment from 'moment';
import Swiper from '../../../components/Swiper';
import { colors } from '../../../theme';

const News = () => {
  const options = {
    data: [], // default for `data` will be an array instead of undefined
  };

  const { loading, error, data } = useFetch(
    'https://newsapi.org/v2/everything?apiKey=68ddf899b505404e960daf512baabe76&q=كورونا مصر',
    []
  );

  const renderNewsCard = (article) => (
    <>
      <Image source={{ uri: article.urlToImage }} style={styles.cardImage} />
      <Text style={styles.cardText}>{article.title}</Text>
      <Text style={styles.cardDate}>{moment(article.publishedAt).format('DD-MM-YYYY')}</Text>
    </>
  )


  return (
    <View style={styles.section}>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {data && <Swiper data={data.articles} renderItem={renderNewsCard} />}
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
  cardImage: {
    height: 140, borderRadius: 5, marginBottom: 10
  },
  cardText: {
    direction: 'rtl',
  },
  cardDate: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 20,
  }
});

export default News;
