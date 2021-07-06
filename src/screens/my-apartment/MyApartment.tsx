import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {ContentContainer, Card} from '../../ui/Styles';

export class MyApartment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  render() {
    const item = {
      planning: require('../../assets/mocks/planning.png'),
    };

    return (
      <ContentContainer>
        <Modal visible={this.state.modalVisible} transparent={false}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={350}>
            <Image
              source={item.planning}
              resizeMode="contain"
              style={styles.layout}
            />
          </ImageZoom>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
          <Image
            source={item.planning}
            resizeMode="contain"
            style={styles.layout}
          />
        </TouchableOpacity>
        <Card>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemCaption}>Этаж</Text>
            <Text style={styles.infoItemValue}>17</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemCaption}>Квартира</Text>
            <Text style={styles.infoItemValue}>355</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemCaption}>Площадь</Text>
            <Text style={styles.infoItemValue}>71 м</Text>
          </View>
        </Card>
      </ContentContainer>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: 350,
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoItemCaption: {
    width: 200,
    fontSize: 16,
    lineHeight: 24,
    color: '#979797',
  },
  infoItemValue: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5e76fa',
  },
});
