import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center' }}>Dashboard</Text>
        <Image style={styles.logo} source={require('../../../assets/c19sm.png')}></Image>
      </View>
      <View />
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 30,
    marginHorizontal: 60,
    flexDirection: 'row',
    width: '80vw',
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
  }
});

export default Header;
