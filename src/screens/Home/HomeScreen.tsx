import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import BigButton from '../../components/BigButton';
import Charts from './sections/Charts';
import HeaderSection from './sections/Header';
import NewsDesktop from './sections/NewsDesktop';
import NewsMobile from './sections/NewsMobile';
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
          {isMobile ? <NewsMobile /> : <NewsDesktop />}
          <Charts />
          <Totals />
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
