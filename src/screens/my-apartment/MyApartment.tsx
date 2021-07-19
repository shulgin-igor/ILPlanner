import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ContentContainer, Card} from '../../ui/Styles';
import {ListItem, ItemCaption, ItemValue, Title} from './MyApartment.styles';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import {getApartment} from '../../services/apartments.service';
import Loading from '../../components/loading/Loading';
import ImageView from 'react-native-image-viewing';

class MyApartment extends React.Component<any, any> {
  state: any = {
    modalVisible: false,
    isLoaded: false,
    apartment: null,
  };

  async componentDidMount() {
    const {data} = await getApartment(this.props.apartmentId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({isLoaded: true, apartment: data});
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    const {apartment} = this.state;

    return (
      <ContentContainer>
        <ImageView
          images={apartment.planning.images.map(({url}: any) => ({uri: url}))}
          imageIndex={0}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}
        />
        <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
          <Image
            source={apartment.planning.images[0]}
            resizeMode="contain"
            style={styles.layout}
          />
        </TouchableOpacity>
        <Card>
          <Title>Планування {apartment.planning.title}</Title>
          <ListItem>
            <ItemCaption>Поверх</ItemCaption>
            <ItemValue>{apartment.floor}</ItemValue>
          </ListItem>
          <ListItem>
            <ItemCaption>Номер квартири</ItemCaption>
            <ItemValue>{apartment.number}</ItemValue>
          </ListItem>
          <ListItem>
            <ItemCaption>Площа</ItemCaption>
            <ItemValue>{apartment.planning.square} м</ItemValue>
          </ListItem>
          <ListItem>
            <ItemCaption>Введення в експлуатацію</ItemCaption>
            <ItemValue>
              {apartment.stage.quarter + ' квартал ' + apartment.stage.year}
            </ItemValue>
          </ListItem>
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
});

const mapStateToProps = (state: RootState) => ({
  apartmentId: state.app.selectedApartmentId,
});

export default connect(mapStateToProps)(MyApartment);
