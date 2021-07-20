import React from 'react';
import {Container} from './OTPForm.styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {verifyOTP} from '../../../../services/auth.service';
import {Label, ValidationError} from '../../SignIn.styles';

export default class OTPForm extends React.Component<any, any> {
  state = {
    validationError: false,
  };

  async _verifyOTP(phone: string, code: string) {
    try {
      const {data} = await verifyOTP(phone, code);
      this.props.onSuccess(data.token);
    } catch (e) {
      this.setState({validationError: true});
    }
  }

  render() {
    const {validationError} = this.state;

    return (
      <Container>
        <Label>Код подтверждения:</Label>
        <OTPInputView
          style={{height: 60}}
          pinCount={4}
          autoFocusOnLoad={false}
          onCodeFilled={(code: string) =>
            this._verifyOTP(this.props.phone, code)
          }
          codeInputFieldStyle={{
            color: '#4f5f8e',
            borderColor: '#ecebeb',
            borderWidth: 2,
            borderRadius: 10,
            height: 60,
            width: 60,
            fontSize: 16,
            lineHeight: 24,
          }}
        />
        {validationError && (
          <ValidationError>Невірний формат телефону</ValidationError>
        )}
      </Container>
    );
  }
}
