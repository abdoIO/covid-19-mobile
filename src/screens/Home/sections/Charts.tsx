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
            backgroundGradientFrom: '#000',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 1,
            },
            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: '#ffa726',
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
