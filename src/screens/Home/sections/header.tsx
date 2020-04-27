import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
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
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignSelf: 'stretch',
    marginVertical: 30,
    marginHorizontal: 20,
  },

  logo: {
    width: 350,
    height: 70,
    alignSelf: 'flex-end',
  },
});

export default Header;
