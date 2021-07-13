import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';
import {Card} from '../../../ui/Styles';

export class Item extends React.Component<any, any> {
  _getMonthFromDate(date: Date): string {
    return Moment(date).format('MMMM');
  }
  render() {
    const {date, amount, meters} = this.props;
    return (
      <Card style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.month}>{this._getMonthFromDate(date)}</Text>
          <Text style={{...styles.label, ...styles.date}}>
            {Moment(date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerBlock}>
            <Text style={styles.label}>Метри</Text>
            <Text style={styles.highlighted}>{meters}</Text>
          </View>
          <View style={styles.footerBlock}>
            <Text style={styles.label}>Сума</Text>
            <Text style={styles.highlighted}>{amount} грн</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 92,
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  month: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4f5f8e',
    textTransform: 'capitalize',
  },
  date: {
    lineHeight: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#979797',
  },
  highlighted: {
    marginLeft: 10,
    color: '#5e76fa',
  },
  footerBlock: {
    flexDirection: 'row',
  },
});
