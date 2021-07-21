import React from 'react';
import {ContentList} from '../../../../ui/Styles';
import {Item} from '../item/Item';
import EmptyState from '../../../../components/empty-state/EmptyState';

export default class List extends React.Component<any, any> {
  _renderItem({item}: any) {
    return (
      <Item date={item.date} amount={item.amount} meters={item.metersAmount} />
    );
  }

  render() {
    const {items} = this.props;

    if (!items.length) {
      return <EmptyState text="У вас ще немає платежів" />;
    }

    return (
      <ContentList
        listKey="payments"
        data={items}
        renderItem={this._renderItem}
      />
    );
  }
}
