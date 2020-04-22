import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoWithAction from '../../components/InfoWithAction';

const DataPrivacy = ({ navigation }) => (
  <InfoWithAction buttonLabel="Next" buttonOnPress={() => navigation.navigate('AskForLocation')}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/c19sm.png')}></Image>
      <Text style={styles.text}>
          data privacy
        </Text>
    </View>
  </InfoWithAction>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 22,
    lineHeight: 40,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
});

export default DataPrivacy;
