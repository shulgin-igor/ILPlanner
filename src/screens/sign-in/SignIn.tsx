import React from 'react';
import HeadingBg from '../../assets/images/login.svg';
import Wizard from './components/Wizard/Wizard';
import {Container, Header, Title} from './SignIn.styles';

export default class SignIn extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Header>
          <HeadingBg width={'102%'} />
          <Title>Авторизація</Title>
        </Header>
        <Wizard />
      </Container>
    );
  }
}
