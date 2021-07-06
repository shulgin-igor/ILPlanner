import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Checked from '../../../../assets/images/icons/checked.svg';

export class CarouselItem extends React.Component<any, any> {
  render() {
    const {title, progress, address} = this.props.data;
    return (
      <View style={styles.item}>
        <View style={styles.heading}>
          <Text style={styles.title}>{title}</Text>
          <Text>{address}</Text>
        </View>
        <View>
          <View style={styles.monthly}>
            <Checked width={20} height={20} fill="#fff" />
            <Text style={styles.monthlyText}> Месячный платеж зачислен</Text>
          </View>
          <Progress.Bar
            progress={progress}
            width={null}
            borderColor="#fff"
            color="#fff"
          />
          <Text style={styles.progressCaption}>
            {progress * 100}% выплачено
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    paddingHorizontal: 13,
    justifyContent: 'space-between',
    paddingVertical: 28,
  },
  heading: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    color: '#ffffff',
  },
  progressCaption: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  monthly: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
  },
  monthlyText: {
    color: '#fff',
  },
});
