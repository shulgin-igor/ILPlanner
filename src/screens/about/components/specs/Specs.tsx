import React from 'react';
import {View} from 'react-native';
import {SpecsItem} from '../specs-item/SpecsItem';
import {ContentList} from '../../../../ui/Styles';

export class Specs extends React.Component<any, any> {
  _renderItem({item}: any) {
    return (
      <SpecsItem id={item.id} title={item.spec.title} value={item.value} />
    );
  }
  render() {
    return (
      <View>
        <ContentList
          data={this.props.items}
          renderItem={this._renderItem}
          listKey="specs"
          initialNumToRender={50}
        />
      </View>
    );
  }
}
