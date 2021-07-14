import React from 'react';
import {Wrapper, Container, Header, Title, CloseButton} from './Dialog.styles';
import Close from '../../assets/images/icons/cancel.svg';
import {Modal} from 'react-native';

export default class Dialog extends React.Component<any, any> {
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.opened}
        animationType="fade">
        <Wrapper>
          <Container>
            <Header>
              <Title>{this.props.title}</Title>
              <CloseButton onPress={() => this.props.onDismiss()}>
                <Close width={13} height={13} />
              </CloseButton>
            </Header>
            {this.props.children}
          </Container>
        </Wrapper>
      </Modal>
    );
  }
}
