import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Item} from './components/Item';
import {ScreenContainer, ContentList} from '../../ui/Styles';
import {getList} from '../../services/payments.service';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import Loading from '../../components/loading/Loading';

class Payments extends React.Component<any, any> {
  state = {
    items: [],
    isLoaded: false,
  };
  _renderItem({item}: any) {
    return (
      <Item date={item.date} amount={item.amount} meters={item.metersAmount} />
    );
  }
  async componentDidMount() {
    const {data} = await getList(this.props.apartmentId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({items: data, isLoaded: true});
  }
  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }
    return (
      <ScreenContainer>
        <View style={{height: 100, backgroundColor: 'red'}} />
        <ContentList
          listKey="payments"
          data={this.state.items}
          renderItem={this._renderItem}
        />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  apartmentId: state.app.selectedApartmentId,
});

export default connect(mapStateToProps)(Payments);
