import React from 'react';
import {
  Container,
  Content,
  Title,
  ContentItem,
  Button,
  StageItem,
  StageTitle,
  StageDate,
} from './Description.styles';
import {FlatList, Image} from 'react-native';
import Dialog from '../../../../components/dialog/Dialog';

export default class Description extends React.Component<any, any> {
  state = {calendarOpened: false};

  _renderItem({item, index}: any) {
    return (
      <StageItem>
        <StageTitle>{index + 1} черга</StageTitle>
        <StageDate>
          {item.quarter} квартал {item.year}
        </StageDate>
      </StageItem>
    );
  }

  render() {
    return (
      <Container>
        <Image
          source={{uri: this.props.logo, width: 110, height: 110}}
          resizeMode={'contain'}
        />
        <Content>
          <Title>{this.props.title}</Title>
          <ContentItem>{this.props.address}</ContentItem>
          <Button onPress={() => this.setState({calendarOpened: true})}>
            <ContentItem>Календар введення</ContentItem>
          </Button>
        </Content>
        <Dialog
          opened={this.state.calendarOpened}
          title="Календар введення в експлуатацію"
          onDismiss={() => this.setState({calendarOpened: false})}>
          <FlatList data={this.props.stages} renderItem={this._renderItem} />
        </Dialog>
      </Container>
    );
  }
}
