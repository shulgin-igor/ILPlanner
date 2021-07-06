import React from 'react';
import {ContentList} from '../../ui/Styles';
import notifications from '../../mocks/notifications';
import Item from './components/Item';

export default class Notifications extends React.Component<any, any> {
  _renderItem({item}: any) {
    return <Item message={item.message} />;
  }
  render() {
    return (
      <ContentList
        listKey="notifications"
        data={notifications}
        renderItem={this._renderItem}
      />
    );
  }
}
