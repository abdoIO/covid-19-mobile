import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import useFetch from 'use-http';
import moment from 'moment';

import Card from '../../../components/Card';
import Swiper from '../../../components/Swiper';
import { colors } from '../../../theme';

const News = ({ country = 'مصر' }) => {
  const options = {
    data: [], // default for `data` will be an array instead of undefined
  };

  const { loading, error, data } = useFetch(
    `https://newsapi.org/v2/everything?apiKey=68ddf899b505404e960daf512baabe76&q=${country} كورونا`,
    []
  );

  const renderNewsCard = (article) => (
    <>
      <Image source={{ uri: article.urlToImage }} style={styles.cardImage} />
      <Text style={styles.cardText}>{article.title}</Text>
      <Text style={styles.cardDate}>
        {moment(article.publishedAt).format('DD-MM-YYYY')}
      </Text>
    </>
  );

  const renderMobile = () => {
    return (
      data && (
        <View style={styles.section}>
          <Swiper data={data.articles} renderItem={renderNewsCard} />
        </View>
      )
    );
  };

  const renderDesktop = () => {
    return (
      <View style={styles.newsDesktop}>
        {data &&
          data.articles.map((article) => {
            return (
              <Card
                style={{ width: 210, margin: 'auto', marginBottom: '1rem' }}>
                <Image
                  source={{ uri: article.urlToImage }}
                  style={styles.cardImage}
                />
                <Text>{article.title}</Text>
                <Text style={styles.cardDate}>
                  {moment(article.publishedAt).format('DD-MM-YYYY')}
                </Text>
              </Card>
            );
          })}
      </View>
    );
  };

  return (
    <>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {Platform.OS === 'web' ? renderDesktop() : renderMobile()}
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
  },
  title: {
    fontSize: 15,
  },
  cardImage: {
    height: 140,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardText: {
    direction: 'rtl',
  },
  cardDate: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 20,
  },
  newsDesktop: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default News;
