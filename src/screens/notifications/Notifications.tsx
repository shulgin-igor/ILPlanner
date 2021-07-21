import React from 'react';
import {ContentList} from '../../ui/Styles';
import notifications from '../../mocks/notifications';
import Item from './components/Item';
import EmptyState from '../../components/empty-state/EmptyState';

export default class Notifications extends React.Component<any, any> {
  state = {
    items: notifications,
  };

  _renderItem({item}: any) {
    return <Item message={item.message} />;
  }

  render() {
    const {items} = this.state;

    if (!items.length) {
      return <EmptyState text="У вас немає сповіщень" />;
    }

    return (
      <ContentList
        listKey="notifications"
        data={items}
        renderItem={this._renderItem}
      />
    );
  }
}
