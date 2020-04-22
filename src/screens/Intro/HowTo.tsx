import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

const HowTo = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/c19sm.png')}></Image>
        <Text>
          هذا التطبيق يساعدك على عملية التشخيص الذاتي لفيروس كورونا. يمكنك هذا
          التطبيق ايضا بالابلاغ الذاتي للسلطات المعنية في بلدك بحالتك لمساعدتك
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
});

export default HowTo;
