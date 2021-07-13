import React from 'react';
import {FlatList, Modal} from 'react-native';
import {
  Wrapper,
  Container,
  Title,
  Item,
  ItemText,
  CloseButton,
  Header,
} from './NotificationSelector.styles';
import Close from '../../../assets/images/icons/cancel.svg';

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
      <Modal
        transparent={true}
        visible={this.props.opened}
        animationType="fade">
        <Wrapper>
          <Container>
            <Header>
              <Title>Нагадування про платіж</Title>
              <CloseButton onPress={() => this.props.onDismiss()}>
                <Close width={13} height={13} />
              </CloseButton>
            </Header>
            <FlatList
              data={options}
              listKey="notificationOption"
              keyExtractor={item => item.value}
              renderItem={item => this._renderItem(item)}
            />
          </Container>
        </Wrapper>
      </Modal>
    );
  }
}
