import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';
import gallery from '../../../../mocks/gallery';
import GalleryItem from './components/GalleryItem';
import {ContentContainer} from '../../../../ui/Styles';

export class Gallery extends React.Component<any, any> {
  public state = {
    visible: false,
    selectedGallery: 0,
  };
  constructor(props: any) {
    super(props);
  }
  _renderItem({item, index}: any) {
    return (
      <TouchableOpacity
        onPress={() => this.setState({visible: true, selectedGallery: index})}>
        <GalleryItem title={item.title} uri={item.items[0].uri} />
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <ContentContainer>
        <ImageView
          images={gallery[this.state.selectedGallery].items}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() => {
            this.setState({visible: false});
          }}
        />
        <FlatList
          listKey="gallery"
          data={gallery}
          renderItem={item => this._renderItem(item)}
        />
      </ContentContainer>
    );
  }
}
