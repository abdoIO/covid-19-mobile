import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Card from '../../../components/Card';

const SafetyScore = () => {
  return (
    <Card>
      <Text style={styles.title}>مجموع نقاط السلامة</Text>
      <Text style={styles.title}>هل يمكنني الخروج؟</Text>
      <Text style={styles.title}>٣٠</Text>
      <Text style={styles.title}>غير مستحسن</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

export default SafetyScore;
