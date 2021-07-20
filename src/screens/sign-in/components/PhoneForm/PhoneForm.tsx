import React from 'react';
import {requestOTP} from '../../../../services/auth.service';
import {
  Container,
  InputContainer,
  TextInput,
  Button,
  ButtonText,
} from './PhoneForm.styles';
import {Label, ValidationError} from '../../SignIn.styles';

export default class PhoneForm extends React.Component<any, any> {
  state = {
    phone: '',
    validationError: false,
  };

  async _requestOTP(phone: string) {
    try {
      await requestOTP(phone);
      this.setState({validationError: false});
      this.props.onSuccess(phone);
    } catch (e) {
      this.setState({validationError: true});
      console.log('error', e.response.status);
    }
  }

  render() {
    const {validationError} = this.state;

    return (
      <Container>
        <InputContainer>
          <Label>Телефон:</Label>
          <TextInput
            hasError={validationError}
            autoCompleteType="tel"
            keyboardType="number-pad"
            maxLength={9}
            onChangeText={(phone: any) => this.setState({phone})}
          />
          {validationError && (
            <ValidationError>Невірний формат телефону</ValidationError>
          )}
        </InputContainer>
        <Button onPress={() => this._requestOTP(this.state.phone)}>
          <ButtonText>Далі</ButtonText>
        </Button>
      </Container>
    );
  }
}
