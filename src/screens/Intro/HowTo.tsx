import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import InfoWithAction from '../../components/InfoWithAction';

const HowTo = ({ navigation }) => (
  <InfoWithAction
    buttonLabel="التالي"
    buttonOnPress={() => navigation.navigate('DataPrivacy')}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}></Image>
      <Text style={styles.text}>
        نحن مجموعة صغيرة من المطورين نعمل على إيجاد حل مبسط يسمح للحكومة بشكل
        أفضل مساعدة مواطنيها على مكافحة هذا الفيروس.
      </Text>
      <Text style={styles.text}>
        نحاول أيضًا تقدير تأثير الوباء الحالي على السكان عامة والمساعدة في الكشف
        عن المصابين دون الاتصال بالجمهور ، مما يساعد على وقف انتشار المرض.
      </Text>
    </View>
  </InfoWithAction>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 18,
    lineHeight: 40,
  },
  logo: {
    width: 350,
    height: 70,
    alignSelf: 'center',
  },
});

export default HowTo;
