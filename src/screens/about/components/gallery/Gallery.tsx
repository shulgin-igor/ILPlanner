import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';
import GalleryItem from './components/GalleryItem';
import {ContentContainer} from '../../../../ui/Styles';

export class Gallery extends React.Component<any, any> {
  state = {
    visible: false,
    selectedGallery: 0,
  };

  _renderItem({item, index}: any) {
    return (
      <TouchableOpacity
        onPress={() => this.setState({visible: true, selectedGallery: index})}>
        <GalleryItem title={item.title} uri={item.items[0].url} />
      </TouchableOpacity>
    );
  }
  render() {
    const {items} = this.props;

    if (!items) {
      // TODO: empty state
      return <Text>Empty</Text>;
    }

    return (
      <ContentContainer>
        <ImageView
          images={items[this.state.selectedGallery].items.map((item: any) => ({
            uri: item.url,
          }))}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() => {
            this.setState({visible: false});
          }}
        />
        <FlatList
          listKey="gallery"
          data={items}
          renderItem={item => this._renderItem(item)}
        />
      </ContentContainer>
    );
  }
}
