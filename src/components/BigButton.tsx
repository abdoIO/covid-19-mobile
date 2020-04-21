import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { colors } from '../theme';

const { width } = Dimensions.get('window');

type BigButtonProps = {
  onPress: () => void;
  title: string;
  containerStyle?: ViewStyle;
}

const BigButton =  ({ onPress, title, containerStyle } : BigButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]} >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue400,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: width / 1.5,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  }
});

export default BigButton;
