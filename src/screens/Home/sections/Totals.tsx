import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import useFetch from 'use-http';
import { colors } from '../../../theme';
import Card from '../../../components/Card';

const DisplayCount = ({ title, number, color }) => (
  <View style={styles.displayContainer}>
    <Text style={[styles.score, { color }]}>{number}</Text>
    <Text style={styles.label}>{title}</Text>
  </View>
)

const Totals = () => {
  const { loading, error, data } = useFetch(
    'https://api.covid19api.com/live/country/egypt/status/confirmed',
    []
  );

  const renderMobile = () => (
    <>
      <Card>
        <View style={styles.container}>
          <DisplayCount title="الحالات النشطة" number={data.slice(-1)[0].Active} color={colors.blue} />
          <DisplayCount title="الحالات المؤكدة" number={data.slice(-1)[0].Confirmed} color={colors.grey} />
        </View>
      </Card>
      <Card>
        <View style={styles.container}>
          <DisplayCount title="حالات الوفاة" number={data.slice(-1)[0].Deaths} color={colors.red} />
          <DisplayCount title="حالات تعافت" number={data.slice(-1)[0].Recovered} color={colors.green} />
        </View>
      </Card>
    </>
  )

  const renderDesktop = () => (
    <Card>
      <View style={styles.container}>
        <DisplayCount title="الحالات النشطة" number={data.slice(-1)[0].Active} color={colors.blue} />
        <DisplayCount title="الحالات المؤكدة" number={data.slice(-1)[0].Confirmed} color={colors.grey} />
        <DisplayCount title="حالات الوفاة" number={data.slice(-1)[0].Deaths} color={colors.red} />
        <DisplayCount title="حالات تعافت" number={data.slice(-1)[0].Recovered} color={colors.green} />
      </View>
    </Card>
  )

  return (
    <>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {data && (Platform.OS === 'web' ? renderDesktop() : renderMobile())}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  displayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 15,
  },
  score: {
    fontSize: 20,
    marginBottom: 15,
  },
});

export default Totals;
