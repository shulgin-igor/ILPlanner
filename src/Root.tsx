import React from 'react';

import Home from './screens/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Payments} from './screens/payments/Payments';
import About from './screens/about/About';
import 'moment/locale/ru';
import {News} from './screens/news/News';
import {MyApartment} from './screens/my-apartment/MyApartment';
import Back from './assets/images/icons/back.svg';
import {View} from 'react-native';
import SignIn from './screens/sign-in/SignIn';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from './store';
import Notifications from './screens/notifications/Notifications';
import Settings from './screens/settings/Settings';
import screenOptions from './config/screenOptions';
import CloseModalButton from './components/close-modal-button/CloseModalButton';
import {getToken} from './services/auth.service';
import {setAuthenticationStatus} from './store/authSlice';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...screenOptions,
        headerBackImage: () => (
          // TODO: move to separate component
          <View style={{paddingLeft: 28}}>
            <Back />
          </View>
        ),
        headerBackTitleVisible: false,
      }}>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, cardStyle: {paddingTop: 0}}}
      />
      <MainStack.Screen name="About" component={About} />
      <MainStack.Screen
        name="Payments"
        options={{title: 'Платежи'}}
        component={Payments}
      />
      <MainStack.Screen
        name="News"
        options={{title: 'Новости'}}
        component={News}
      />
      <MainStack.Screen
        name="MyApartment"
        options={{title: 'Моя квартира'}}
        component={MyApartment}
      />
      <MainStack.Screen
        name="Settings"
        options={{title: 'Настройки'}}
        component={Settings}
      />
    </MainStack.Navigator>
  );
};
class Root extends React.Component<any, any> {
  async componentDidMount() {
    const token = await getToken();

    this.props.setAuthenticationStatus(token !== undefined);
  }

  _renderApp() {
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              title: 'Уведомления',
              ...screenOptions,
              headerLeft: () => <></>,
              headerRight: () => <CloseModalButton />,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
  _renderSignIn() {
    return <SignIn />;
  }
  render() {
    if (this.props.authenticated) {
      return this._renderApp();
    } else {
      return this._renderSignIn();
    }
  }
}

const mapStateToProps = (state: RootState) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setAuthenticationStatus: (data: boolean) =>
    dispatch(setAuthenticationStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
