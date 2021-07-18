import React from 'react';
import {ScreenContainer} from '../../../../ui/Styles';
import {Dimensions, ScrollView} from 'react-native';
import {brownGrey, cornFlower} from '../../../../ui/Colors';
import {StyledLineChart} from './Chart.styles';
import {
  getPaymentChartLabels,
  getPaymentsChartData,
} from '../../../../services/payments.service';

export default class Chart extends React.Component<any, any> {
  render() {
    const {payments, plan} = this.props;

    const data = getPaymentsChartData(payments, plan);
    const labels = getPaymentChartLabels(plan);

    return (
      <ScreenContainer>
        <ScrollView horizontal={true}>
          <StyledLineChart
            data={{
              labels,
              datasets: [
                {
                  data,
                },
              ],
            }}
            withHorizontalLines={false}
            width={plan.duration * 100} // from react-native
            height={500}
            yAxisSuffix="м"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              fillShadowGradient: cornFlower,
              color: () => cornFlower,
              labelColor: () => brownGrey,
              propsForDots: {
                fill: cornFlower,
                r: '6',
                strokeWidth: '0',
              },
            }}
          />
        </ScrollView>
      </ScreenContainer>
    );
  }
}
