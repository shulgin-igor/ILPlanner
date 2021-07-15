import React from 'react';
import {ScreenContainer} from '../../../../ui/Styles';
import {Dimensions, ScrollView} from 'react-native';
import {brownGrey, cornFlower} from '../../../../ui/Colors';
import {StyledLineChart} from './Chart.styles';

export default class Chart extends React.Component<any, any> {
  render() {
    return (
      <ScreenContainer>
        <ScrollView horizontal={true}>
          <StyledLineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [71, 55, 47, 20, 7, 0],
                },
              ],
            }}
            withHorizontalLines={false}
            width={Dimensions.get('window').width * 2} // from react-native
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
            bezier
          />
        </ScrollView>
      </ScreenContainer>
    );
  }
}
