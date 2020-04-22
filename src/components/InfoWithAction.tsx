import React from 'react';
import { View, StyleSheet, Dimensions, Text, SafeAreaView } from 'react-native';
import { colors } from '../theme';
import BigButton from './BigButton';

const { width } = Dimensions.get('window');

type InfoWithActionProps = {
  children: React.ReactNode;
  buttonLabel: string;
  buttonOnPress: () => void;
}

const InfoWithAction = ({ children, buttonLabel, buttonOnPress }: InfoWithActionProps) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {children}
      <View style={styles.fixedButtonContainer}>
          <BigButton
            title={buttonLabel}
            onPress={buttonOnPress}
          />
        </View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
    marginBottom: 60,
    marginHorizontal: 40,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom:10,
  },
});

export default InfoWithAction;
