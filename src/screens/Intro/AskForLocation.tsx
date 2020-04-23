import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import InfoWithAction from '../../components/InfoWithAction';

const AskForLocation = ({ navigation }) => (
  <InfoWithAction
    buttonLabel="فعل خدمات تحديد الموقع"
    buttonOnPress={() =>
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        })
      )
    }>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/c19sm.png')}></Image>
      <Text style={styles.text}>
        نحن بحاجة إلى موقعك لتخصيص تجربة التطبيق. نحن لا نستخدم موقعك إلا إذا
        أبلغت عن نفسك.
      </Text>
    </View>
  </InfoWithAction>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 22,
    lineHeight: 40,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
});

export default AskForLocation;
