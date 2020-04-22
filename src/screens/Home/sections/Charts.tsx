import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Card from '../../../components/Card';

const Charts = () => {
  return (
    <Card>
      <View>
        <LineChart
          bezier
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 80}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              backgroundColor: '#e26a00',
              borderRadius: 16,
            },
          }}
          style={{
            borderRadius: 16,
          }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

export default Charts;
