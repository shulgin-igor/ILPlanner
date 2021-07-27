import React from 'react';
import {Container, ChangeNumber} from './OTPForm.styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {verifyOTP} from '../../../../services/auth.service';
import {Label, ValidationError} from '../../SignIn.styles';
import {orangeRed} from '../../../../ui/Colors';
import {TouchableOpacity} from 'react-native';

export default class OTPForm extends React.Component<any, any> {
  state = {
    code: undefined,
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
        <Label>Код підтвердження:</Label>
        <OTPInputView
          code={this.state.code}
          style={{height: 60}}
          pinCount={4}
          autoFocusOnLoad={false}
          onCodeChanged={code => this.setState({code})}
          onCodeFilled={(code: string) =>
            this._verifyOTP(this.props.phone, code)
          }
          codeInputFieldStyle={{
            color: '#4f5f8e',
            borderColor: validationError ? orangeRed : '#ecebeb',
            borderWidth: 2,
            borderRadius: 10,
            height: 60,
            width: 60,
            fontSize: 24,
            lineHeight: 32,
            fontWeight: 'bold',
          }}
        />
        {validationError && (
          <ValidationError>Невірно введено код</ValidationError>
        )}
        <TouchableOpacity
          onPress={() => {
            this.setState({validationError: false, code: undefined});
            this.props.onChangeNumber();
          }}>
          <ChangeNumber>Змінити номер</ChangeNumber>
        </TouchableOpacity>
      </Container>
    );
  }
}
