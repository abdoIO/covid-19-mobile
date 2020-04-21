import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Dashboard</Text>
      </View>
      <View />
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});

export default Header;
