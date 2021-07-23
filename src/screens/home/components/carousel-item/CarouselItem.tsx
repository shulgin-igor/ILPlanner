import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Checked from '../../../../assets/images/icons/checked.svg';
import {Container, Heading, Title, Address} from './CarouselItem.styles';

export class CarouselItem extends React.Component<any, any> {
  render() {
    const progress = 0;
    const {title, address} = this.props.data.planning.complex;
    return (
      <Container>
        <Heading>
          <Title>{title}</Title>
          <Address>{address}</Address>
        </Heading>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
