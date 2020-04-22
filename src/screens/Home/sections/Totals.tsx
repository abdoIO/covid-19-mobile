import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useFetch from 'use-http';

import Card from '../../../components/Card';

const Totals = () => {
  const { loading, error, data } = useFetch(
    'https://api.covid19api.com/live/country/egypt/status/confirmed',
    []
  );

  return (
    <Card>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {data && (
        <View style={styles.container}>
          <Text style={styles.title}>
            <Text style={styles.score}>{data.slice(-1)[0].Active}</Text>
            <Text style={styles.label}>الحالات النشطة</Text>
          </Text>
          <Text style={styles.title}>
            <Text style={styles.score}>{data.slice(-1)[0].Confirmed}</Text>
            <Text style={styles.label}>الحالات المؤكدة</Text>
          </Text>
          <Text style={styles.title}>
            <Text style={styles.score}>{data.slice(-1)[0].Deaths}</Text>
            <Text style={styles.label}>حالات الوفاة</Text>
          </Text>
          <Text style={styles.title}>
            <Text style={styles.score}>{data.slice(-1)[0].Recovered}</Text>
            <Text style={styles.label}>حالات تعافت</Text>
          </Text>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 15,
  },
  score: {
    color: 'red',
  },
  label: {},
});

export default Totals;
