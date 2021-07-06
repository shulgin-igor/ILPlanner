import React from 'react';
import {View} from 'react-native';
import {Item} from './components/Item';
import {ScreenContainer, ContentList} from '../../ui/Styles';
import payments from '../../mocks/payments';

export class Payments extends React.Component<any, any> {
  _renderItem({item}: any) {
    return <Item date={item.date} amount={item.amount} meters={item.meters} />;
  }
  render() {
    return (
      <ScreenContainer>
        <View style={{height: 100, backgroundColor: 'red'}} />
        <ContentList
          listKey="payments"
          data={payments}
          renderItem={this._renderItem}
        />
      </ScreenContainer>
    );
  }
}
