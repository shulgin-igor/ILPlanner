import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Buildings from '../../../../assets/images/icons/buildings.svg';
import Crane from '../../../../assets/images/icons/crane.svg';
import Wall from '../../../../assets/images/icons/wall.svg';
import Star from '../../../../assets/images/icons/star.svg';
import Heater from '../../../../assets/images/icons/heater.svg';
import Ruler from '../../../../assets/images/icons/ruler.svg';
import Roller from '../../../../assets/images/icons/paint-roller.svg';
import Barrier from '../../../../assets/images/icons/barrier.svg';
import Blueprint from '../../../../assets/images/icons/blueprint.svg';
import Parking from '../../../../assets/images/icons/car-parking.svg';
import {Card} from '../../../../ui/Styles';

export class SpecsItem extends React.Component<any, any> {
  _getIconByCategory(id: string) {
    switch (id) {
      case 'class':
        return <Star />;
      case 'number_of_buildings':
        return <Buildings />;
      case 'building_technology':
        return <Crane />;
      case 'walls':
        return <Wall />;
      case 'heating':
        return <Heater />;
      case 'ceiling_height':
        return <Ruler />;
      case 'apartment_condition':
        return <Roller />;
      case 'private_area':
        return <Barrier />;
      case 'number_of_apartments':
        return <Blueprint />;
      case 'parking':
        return <Parking />;
      default:
        return <Text />;
    }
  }
  render() {
    const {id, title, value} = this.props;
    const icon = this._getIconByCategory(id);
    return (
      <Card style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.icon}>{icon}</View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#979797',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4f5f8e',
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  icon: {
    width: 50,
    flexDirection: 'column',
  },
});
