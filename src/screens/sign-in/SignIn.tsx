import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeadingBg from '../../assets/images/login.svg';
import Wizard from './components/Wizard';

export default class SignIn extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <HeadingBg width={'102%'} />
          <Text style={styles.headingTitle}>Авторизация</Text>
        </View>
        <Wizard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 75,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    color: '#ffffff',
    position: 'absolute',
  },
});
