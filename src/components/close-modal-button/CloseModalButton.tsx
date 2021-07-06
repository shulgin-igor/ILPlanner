import React from 'react';
import {Container} from './CloseModalButton.styles';
import Close from '../../assets/images/icons/cancel.svg';
import {useNavigation} from '@react-navigation/native';

class CloseModalButton extends React.Component<any, any> {
  render() {
    const {navigation} = this.props;
    return (
      <Container onPress={() => navigation.goBack()}>
        <Close width={20} height={20} />
      </Container>
    );
  }
}

export default (props: any) => {
  const navigation = useNavigation();
  return <CloseModalButton {...props} navigation={navigation} />;
};
