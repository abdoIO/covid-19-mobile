import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import BigButton from '../components/BigButton';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  const navigateToBotScreen = () => navigation.navigate('Bot');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View>
              <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Dashboard</Text>
            </View>
            <View />
          </View>
          <Card>
            <Text style={{ fontSize: 15 }}>Safety Score</Text>
          </Card>
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
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 40,
  }
});

export default HomeScreen;
