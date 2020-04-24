import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { colors } from '../theme';

type BackButtonProps = {
  style?: ViewStyle;
}

const BackButton = ({ style }: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={[styles.container, style]}>
      <Feather name="arrow-left" size={34} color={colors.blue400} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
});

export default BackButton;
