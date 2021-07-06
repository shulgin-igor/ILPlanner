import React from 'react';
import {GalleryPreview, Title, Container} from './GalleryItem.styles';

export default class GalleryItem extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <GalleryPreview source={{uri: this.props.uri}} />
      </Container>
    );
  }
}
