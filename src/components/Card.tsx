import React from 'react';
import { View, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { colors } from '../theme';

const { width } = Dimensions.get('window');

type CardProps = {
  children: React.ReactNode;
  style: ViewStyle;
}

const Card = ({ children, style} : CardProps) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginLeft: 20, //should be margin right when we switch to Arabic
    marginBottom: 20,
    width: width - 40,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 2,
  }
});

export default Card;
