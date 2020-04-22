import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../../assets/c19sm.png')}></Image>
      <Text style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center' }}>
        الرئيسية
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignSelf: 'stretch',
    marginVertical: 30,
    marginHorizontal: 20,
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
  },
});

export default Header;
