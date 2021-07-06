import React from 'react';
import {Card} from '../../../ui/Styles';
import {Text} from 'react-native';

export default class Item extends React.Component<any, any> {
  render() {
    const {message} = this.props;
    return (
      <Card>
        <Text>{message}</Text>
      </Card>
    );
  }
}
