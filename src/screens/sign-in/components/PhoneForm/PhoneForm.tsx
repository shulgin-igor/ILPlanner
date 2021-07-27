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

const clearPhone = (value: string): string =>
  value.replace('+380', '').replace(/\s/g, '');

const formatPhone = (phone: string): string =>
  '+380 ' +
  Array.from(clearPhone(phone)).reduce((acc, item, index) => {
    if (index === 2 || index === 5 || index === 7) {
      acc += ' ';
    }
    acc += item;
    return acc;
  }, '');

export default class PhoneForm extends React.Component<any, any> {
  state = {
    phone: '+380',
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
    const {validationError, phone} = this.state;

    return (
      <Container>
        <InputContainer>
          <Label>Телефон:</Label>
          <TextInput
            hasError={validationError}
            autoCompleteType="tel"
            keyboardType="number-pad"
            maxLength={17}
            value={phone}
            onFocus={() => this.setState({validationError: false})}
            returnKeyType="done"
            onChangeText={(value: any) => {
              this.setState({
                phone: formatPhone(value.replace(/\s/g, '')),
              });
            }}
          />
          {validationError && (
            <ValidationError>Невірний формат телефону</ValidationError>
          )}
        </InputContainer>
        <Button onPress={() => this._requestOTP(clearPhone(phone))}>
          <ButtonText>Далі</ButtonText>
        </Button>
      </Container>
    );
  }
}
