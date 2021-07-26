import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Date, Caption} from './Item.styles';
import moment from 'moment';

class Item extends React.Component<any, any> {
  render() {
    const {caption, date} = this.props;

    return (
      <TouchableOpacity>
        <Container>
          <Date>{moment(date).format('DD MMMM')}</Date>
          <Caption>{caption}</Caption>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default (props: any) => {
  const navigation = useNavigation();
  return <Item {...props} navigation={navigation} />;
};
