import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../../../components/Card';

const SafetyScore = () => {
  return (
    <Card style={styles.container}>
      <View style={styles.infoScore}>
        <Text style={styles.score}>٣٠</Text>
        <Text style={styles.recommendation}>غير مستحسن</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>نقاط السلامة</Text>
        <Text style={styles.subTitle}>هل يمكنني الخروج؟</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 14,
  },
  score: {
    fontSize: 30,
    color: 'red',
    justifyContent: 'center',
  },
  recommendation: {
    fontSize: 18,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  infoScore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SafetyScore;
