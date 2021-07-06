import React from 'react';
import {View} from 'react-native';
import {SpecsItem} from '../specs-item/SpecsItem';
import specs from '../../../../mocks/building-specs';
import {ContentList} from '../../../../ui/Styles';

export class Specs extends React.Component<any, any> {
  _renderItem({item}: any) {
    return <SpecsItem id={item.id} title={item.title} value={item.value} />;
  }
  render() {
    const items = specs;
    return (
      <View>
        <ContentList
          data={items}
          renderItem={this._renderItem}
          listKey="specs"
          initialNumToRender={50}
        />
      </View>
    );
  }
}
