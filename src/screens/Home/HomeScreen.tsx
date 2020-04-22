import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import BigButton from '../../components/BigButton';
import Charts from './sections/Charts';
import HeaderSection from './sections/Header';
import News from './sections/News';
import SafetyScoreSection from './sections/SafetyScore';
import Swiper from '../../components/Swiper';
import Totals from './sections/Totals';

const HomeScreen = ({ navigation }) => {
  const navigateToBotScreen = () => navigation.navigate('Bot');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderSection />
        <ScrollView>
          <SafetyScoreSection />
          <News />
          <Charts />
          <Totals />
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <BigButton
            title="إبدأ التشخيص الذاتي"
            onPress={navigateToBotScreen}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  },
});

export default HomeScreen;
