import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

const HowTo = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../../assets/c19sm.png')}></Image>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default HowTo;

const styles = StyleSheet.create({});
