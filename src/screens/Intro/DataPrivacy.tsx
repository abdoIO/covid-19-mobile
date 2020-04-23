import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoWithAction from '../../components/InfoWithAction';

const DataPrivacy = ({ navigation }) => (
  <InfoWithAction
    buttonLabel="أوافق"
    buttonOnPress={() => navigation.navigate('AskForLocation')}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/c19sm.png')}></Image>
      <Text style={styles.text}>
        هذا التطبيق يساعدك على عملية التشخيص الذاتي لفيروس كورونا. يمكنك هذا
        التطبيق ايضا بالابلاغ الذاتي للسلطات المعنية في بلدك بحالتك لمساعدتك
      </Text>
      <Text style={styles.text}>
        نحن ملزمون بحفظ بياناتك الخاصة. نحن نستخدم البيانات فقط بغرض مساعدتك في
        إعداد التقارير الذاتية والتشخيص الذاتي.
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
    fontSize: 18,
    lineHeight: 40,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
});

export default DataPrivacy;
