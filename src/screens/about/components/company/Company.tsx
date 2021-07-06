import React from 'react';
import companiesMock from '../../../../mocks/companies';
import {CompanyItem} from './components/CompanyItem';
import {ContentList} from '../../../../ui/Styles';

export class Company extends React.Component<any, any> {
  _renderItem({item}: any) {
    return <CompanyItem data={item} />;
  }
  render() {
    const companies = companiesMock;

    return <ContentList data={companies} renderItem={this._renderItem} />;
  }
}
