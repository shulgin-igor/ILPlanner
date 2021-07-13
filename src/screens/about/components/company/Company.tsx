import React from 'react';
import {CompanyItem} from './components/CompanyItem';
import {ContentList} from '../../../../ui/Styles';

export class Company extends React.Component<any, any> {
  _renderItem({item}: any) {
    return <CompanyItem data={item} />;
  }
  render() {
    return (
      <ContentList
        data={this.props.items}
        listKey="developers"
        renderItem={this._renderItem}
      />
    );
  }
}
