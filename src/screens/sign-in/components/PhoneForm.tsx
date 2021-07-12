import React from 'react';
import {requestOTP} from '../../../services/auth.service';
import {
  Container,
  InputContainer,
  TextInput,
  Button,
  ButtonText,
} from './PhoneForm.styles';
import {Text} from 'react-native';

export default class PhoneForm extends React.Component<any, any> {
  state = {phone: ''};
  async _requestOTP(phone: string) {
    await requestOTP(phone);
    this.props.onSuccess(phone);
  }
  render() {
    return (
      <Container>
        <InputContainer>
          <Text>Телефон:</Text>
          <TextInput
            autoCompleteType="tel"
            keyboardType="number-pad"
            maxLength={9}
            onChangeText={phone => this.setState({phone})}
          />
        </InputContainer>
        <Button onPress={() => this._requestOTP(this.state.phone)}>
          <ButtonText>Дальше</ButtonText>
        </Button>
      </Container>
    );
  }
}
