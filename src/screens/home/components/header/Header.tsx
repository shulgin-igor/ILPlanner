import React from 'react';
import {Container, ButtonsContainer, Button} from './Header.styles';
import Logo from '../../../../assets/images/logo.svg';
import Settings from '../../../../assets/images/icons/settings.svg';
import Bell from '../../../../assets/images/icons/bell.svg';
import {useNavigation} from '@react-navigation/native';

class Header extends React.Component<any, any> {
  _openSettings() {
    const {navigation} = this.props;
    navigation.navigate('Settings');
  }
  _openNotifications() {
    const {navigation} = this.props;
    navigation.navigate('Notifications');
  }
  render() {
    return (
      <Container>
        <Logo width={50} height={50} />
        <ButtonsContainer>
          <Button onPress={() => this._openSettings()}>
            <Settings width={25} height={25} />
          </Button>
          <Button onPress={() => this._openNotifications()}>
            <Bell width={25} height={25} />
          </Button>
        </ButtonsContainer>
      </Container>
    );
  }
}

export default (props: any) => {
  const navigation = useNavigation();
  return <Header {...props} navigation={navigation} />;
};
