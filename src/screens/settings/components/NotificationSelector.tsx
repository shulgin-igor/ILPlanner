import React from 'react';
import {FlatList} from 'react-native';
import {Item, ItemText} from './NotificationSelector.styles';
import Dialog from '../../../components/dialog/Dialog';

const options = [
  {
    title: 'За 7 днів',
    value: 7,
  },
  {
    title: 'За 14 днів',
    value: 14,
  },
  {
    title: 'За 21 день',
    value: 21,
  },
  {
    title: 'Вимкнути',
    value: -1,
  },
];

export default class NotificationSelector extends React.Component<any, any> {
  _renderItem({item}: any) {
    return (
      <Item onPress={() => this.props.onSelect(item.value)}>
        <ItemText selected={this.props.value === item.value}>
          {item.title}
        </ItemText>
      </Item>
    );
  }

  render() {
    return (
      <Dialog
        title="Нагадування про платіж"
        opened={this.props.opened}
        onDismiss={() => this.props.onDismiss()}>
        <FlatList
          data={options}
          listKey="notificationOption"
          keyExtractor={item => item.value}
          renderItem={item => this._renderItem(item)}
        />
      </Dialog>
    );
  }
}
