import React from 'react';
import {Container} from './Loading.styles';
import {ActivityIndicator} from 'react-native';
import {cornFlower} from '../../ui/Colors';

export default class Loading extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <ActivityIndicator size="large" color={cornFlower} />
      </Container>
    );
  }
}
