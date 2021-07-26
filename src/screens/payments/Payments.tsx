import React from 'react';
import {ScreenContainer} from '../../ui/Styles';
import {getList, getMonthlyMeters} from '../../services/payments.service';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import Loading from '../../components/loading/Loading';
import {Notification, NotificationText} from './Payments.styles';
import CustomTabBar from '../../components/tab-bar/CustomTabBar';
import List from './components/list/List';
import Chart from './components/chart/Chart';
import moment from 'moment';

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
    payments: [],
    isLoaded: false,
    installmentPlan: null,
    price: null,
  };

  _getNotificationText(pendingPayment: boolean) {
    if (pendingPayment) {
      const {price, installmentPlan, items} = this.state;
      const monthlyMeters = getMonthlyMeters(items, installmentPlan);
      const dueDate =
        new Date(installmentPlan.startDate).getDate() +
        '.' +
        moment().format('MM');

      return `Очікується щомісячний платіж у розмірі\n ${
        monthlyMeters * price.value
      } грн до ${dueDate}`;
    }
    return 'Щомісячний платіж зараховано';
  }

  async componentDidMount() {
    const {data} = await getList(this.props.apartmentId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      ...data,
      isLoaded: true,
    });
  }

  _renderScene({route}: any) {
    switch (route.key) {
      case 'list':
        return <List items={this.state.payments} />;
      case 'chart':
        return (
          <Chart
            payments={this.state.payments}
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

    let pendingPayment = true;

    if (this.state.payments.length) {
      pendingPayment =
        new Date(this.state.payments[0].date).getMonth() <
        new Date().getMonth();
    }

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
