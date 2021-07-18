import React from 'react';
import {ContentList} from '../../../../ui/Styles';
import {Item} from '../item/Item';

export default class List extends React.Component<any, any> {
  _renderItem({item}: any) {
    return (
      <Item date={item.date} amount={item.amount} meters={item.metersAmount} />
    );
  }

  render() {
    return (
      <ContentList
        listKey="payments"
        data={this.props.items}
        renderItem={this._renderItem}
      />
    );
  }
}
