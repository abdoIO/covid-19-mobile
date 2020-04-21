import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import BigButton from '../../components/BigButton';
import HeaderSection from './sections/header';
import SafetyScoreSection from './sections/safety-score';

const HomeScreen = ({ navigation }) => {
  const navigateToBotScreen = () => navigation.navigate('Bot');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderSection />
        <ScrollView>
          <SafetyScoreSection />
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <BigButton
            title="Start Self Diagnosis"
            onPress={navigateToBotScreen}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 40,
  }
});

export default HomeScreen;
