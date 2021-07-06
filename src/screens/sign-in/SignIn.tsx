import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeadingBg from '../../assets/images/login.svg';
import {setUser} from '../../store/authSlice';
import {AppDispatch} from '../../store';
import {connect} from 'react-redux';

class SignIn extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <HeadingBg width={'102%'} />
          <Text style={styles.headingTitle}>Авторизация</Text>
        </View>
        <TextInput style={styles.input} autoCompleteType="tel" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.setUser()}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
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
  input: {
    height: 60,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    marginHorizontal: 26,
    borderColor: '#ecebeb',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#4f5f8e',
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
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5e76fa',
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setUser: () => dispatch(setUser({a: 1})),
});

export default connect(null, mapDispatchToProps)(SignIn);
