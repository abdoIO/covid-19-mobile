import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import useFetch from 'use-http';
import moment from 'moment';

import Card from '../../../components/Card';

const Charts = () => {
  const { loading, error, data } = useFetch(
    'https://api.covid19api.com/live/country/egypt/status/confirmed',
    []
  );

  var days, activeCases;

  if (data) {
    days = data.map((entry) => {
      let dateFormatted = moment(entry.Date, 'YYYY-MM-DD HH:mm:ss');
      return dateFormatted.format('dddd');
    });

    activeCases = data.map((entry) => {
      return entry.Active;
    });
  }

  return (
    <>
      {error && <Text>Error!</Text>}
      {loading && <Text>Loading...</Text>}
      {data && (
        <Card>
          <View>
            <LineChart
              bezier
              data={{
                labels: data && [...days],
                datasets: [
                  {
                    data: [...activeCases],
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 80}
              height={200}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 1,
                },
                propsForDots: {
                  r: '3',
                  strokeWidth: '1',
                  stroke: '#2667FF',
                },
              }}
              style={{
                borderRadius: 16,
              }}
            />
          </View>
        </Card>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

export default Charts;
