import React from 'react';
import {Container, Caption} from './NavigationItem.styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

class NavigationItem extends React.Component<any, any> {
  render() {
    const {icon, caption, navigation, link} = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Container>
          {icon}
          <Caption>{caption}</Caption>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default (props: any) => {
  const navigation = useNavigation();
  return <NavigationItem {...props} navigation={navigation} />;
};
