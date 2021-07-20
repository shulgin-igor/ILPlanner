import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {Container} from './Wizard.styles';
import PhoneForm from './PhoneForm';
import OTPForm from './OTPForm';
import {setToken} from '../../../services/auth.service';

const {width: viewportWidth} = Dimensions.get('window');

export default class Wizard extends React.Component<any, any> {
  _carousel: any;

  state = {
    phone: null,
  };

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
          onSuccess={async (token: string) => {
            await setToken(token);
          }}
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
