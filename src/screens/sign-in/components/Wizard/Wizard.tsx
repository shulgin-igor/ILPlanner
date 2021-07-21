import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {Container} from './Wizard.styles';
import PhoneForm from '../PhoneForm/PhoneForm';
import OTPForm from '../OTPForm/OTPForm';
import {setToken} from '../../../../services/auth.service';
import {AppDispatch} from '../../../../store';
import {connect} from 'react-redux';
import {setAuthenticationStatus} from '../../../../store/authSlice';

const {width: viewportWidth} = Dimensions.get('window');

class Wizard extends React.Component<any, any> {
  _carousel: any;

  state = {
    phone: null,
  };

  async _onOTPSuccess(token: string) {
    await setToken(token);
    this.props.completeAuth();
  }

  _renderItem({item}: any) {
    if (item === 'phone') {
      return (
        <PhoneForm
          onSuccess={(phone: string) => {
            this.setState({phone});
            this._carousel.snapToNext();
          }}
        />
      );
    } else {
      return (
        <OTPForm
          phone={this.state.phone}
          onSuccess={(token: string) => this._onOTPSuccess(token)}
        />
      );
    }
  }

  render() {
    const items = ['phone', 'otp'];
    return (
      <Container>
        <Carousel
          slideStyle={{
            paddingHorizontal: 26,
            justifyContent: 'center',
          }}
          data={items}
          renderItem={(data: any) => this._renderItem(data)}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          scrollEnabled={false}
          ref={r => (this._carousel = r)}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  completeAuth: () => dispatch(setAuthenticationStatus(true)),
});

export default connect(null, mapDispatchToProps)(Wizard);
