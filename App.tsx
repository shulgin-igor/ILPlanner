import React from 'react';

import Moment from 'moment';
import 'moment/locale/uk';
import {Provider} from 'react-redux';
import store from './src/store';
import Root from './src/Root';

if (__DEV__) {
  import('./src/config/reactotron');
}

Moment.locale('uk');

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
