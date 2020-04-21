import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../theme';

const { width } = Dimensions.get('window');

type CardProps = {
  children: React.ReactNode;
}

export default ({ children} : CardProps) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    width: width - 40,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 2,
  }
});