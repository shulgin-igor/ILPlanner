import React from 'react';
import {ScreenContainer} from '../../ui/Styles';
import {getList} from '../../services/payments.service';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import Loading from '../../components/loading/Loading';
import {Notification, NotificationText} from './Payments.styles';
import CustomTabBar from '../../components/tab-bar/CustomTabBar';
import List from './components/list/List';
import Chart from './components/chart/Chart';

const routes = [
  {
    key: 'list',
    title: 'Історія платежів',
  },
  {
    key: 'chart',
    title: 'Графік погашення',
  },
];

class Payments extends React.Component<any, any> {
  state: any = {
    items: [],
    isLoaded: false,
    monthlyPaymentAmount: 37000,
    installmentPlan: null,
  };

  _getNotificationText(pendingPayment: boolean) {
    if (pendingPayment) {
      return `Очікується щомісячний платіж у розмірі ${this.state.monthlyPaymentAmount} грн до 24 липня`;
    }
    return 'Щомісячний платіж зараховано';
  }

  async componentDidMount() {
    const {data} = await getList(this.props.apartmentId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      items: data.payments,
      installmentPlan: data.installmentPlan,
      isLoaded: true,
    });
  }

  _renderScene({route}: any) {
    switch (route.key) {
      case 'list':
        return <List items={this.state.items} />;
      case 'chart':
        return (
          <Chart
            payments={this.state.items}
            plan={this.state.installmentPlan}
          />
        );
      default:
        return null;
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    const pendingPayment =
      new Date(this.state.items[0].date).getMonth() < new Date().getMonth();

    return (
      <ScreenContainer>
        <Notification pending={pendingPayment}>
          <NotificationText>
            {this._getNotificationText(pendingPayment)}
          </NotificationText>
        </Notification>
        <CustomTabBar
          routes={routes}
          renderScene={(route: any) => this._renderScene(route)}
        />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  apartmentId: state.app.selectedApartmentId,
});

export default connect(mapStateToProps)(Payments);
