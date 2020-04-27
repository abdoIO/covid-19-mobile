import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InfoWithAction from '../../components/InfoWithAction';

import { colors } from '../../theme';
const { width } = Dimensions.get('window');

const Result = ({ renderedSteps, steps, values }) => {
  const navigation = useNavigation();

  return (
    <InfoWithAction
      buttonLabel="الرئيسية"
      buttonOnPress={() => navigation.navigate('Home')}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}></Image>
        <Text style={styles.text}>
          لا تشير أعراضك إلى أنك قد تكون مصابًا بعدوى COVID-19. ومع ذلك ، وفقًا
          لإرشادات منظمة الصحة العالمية ومركز السيطرة على الأمراض ، فمن المستحسن
          أن تبقي نفسك بعيدًا عن الآخرين لمدة 14 يومًا.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.button]}>
          <Text style={styles.buttonText}>
            حدد موعدًا لمكالمة مع أحد شركائنا من الأطباء
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.button]}>
          <Text style={styles.buttonText}>اتصل بخدمات الطوارئ</Text>
        </TouchableOpacity>
      </View>
    </InfoWithAction>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    color: 'white',
    backgroundColor: colors.blue400,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: width / 1.2,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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

export default Result;
