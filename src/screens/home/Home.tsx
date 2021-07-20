import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import Item from './components/item/Item';
import Carousel from 'react-native-snap-carousel';
import {CarouselItem} from './components/carousel-item/CarouselItem';
import Wallet from '../../assets/images/icons/wallet.svg';
import Building from '../../assets/images/icons/building.svg';
import Door from '../../assets/images/icons/open-door.svg';
import Megaphone from '../../assets/images/icons/megaphone.svg';
import Header from './components/header/Header';
import {getList} from '../../services/apartments.service';
import {AppDispatch} from '../../store';
import {connect} from 'react-redux';
import {
  setSelectedApartmentId,
  setSelectedComplexId,
} from '../../store/appSlice';
import Loading from '../../components/loading/Loading';

const {width: viewportWidth} = Dimensions.get('window');

class Home extends React.Component<any, any> {
  state: any = {
    items: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const {data} = await getList();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({items: data, isLoaded: true});
    this._onApartmentChanged(data[0]);
  }

  _onApartmentChanged(data: any) {
    this.props.setSelectedApartmentId(data.id);
    this.props.setSelectedComplexId(data.planning.complex.id);
  }

  _renderItem({item}: any) {
    return <Item icon={item.icon} caption={item.caption} link={item.link} />;
  }

  _renderCarouselItem({item}: any) {
    return <CarouselItem data={item} />;
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    const items = [
      {
        icon: <Building width={60} height={60} />,
        caption: 'Про ЖК',
        link: 'About',
      },
      {
        icon: <Wallet width={60} height={60} />,
        caption: 'Платежи',
        link: 'Payments',
      },
      {
        icon: <Door width={60} height={60} />,
        caption: 'Моя квартира',
        link: 'MyApartment',
      },
      {
        icon: <Megaphone width={60} height={60} />,
        caption: 'Новости',
        link: 'News',
      },
    ];

    return (
      <View style={styles.screenContainer}>
        <View style={styles.carouselContainer}>
          <Header />
          <Carousel
            data={this.state.items}
            renderItem={this._renderCarouselItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth - 54}
            scrollEnabled={this.state.items > 1}
            onSnapToItem={index => {
              const data = this.state.items[index];
              this._onApartmentChanged(data);
            }}
          />
        </View>
        <FlatList
          listKey="home"
          style={styles.list}
          data={items}
          keyExtractor={({link}) => link}
          renderItem={this._renderItem}
          numColumns={2}
          scrollEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  carouselContainer: {
    backgroundColor: '#5e76fa',
    paddingTop: 32,
    paddingBottom: 37,
  },
  list: {
    paddingTop: 25,
    paddingHorizontal: 28,
  },
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setSelectedComplexId: (id: number) => dispatch(setSelectedComplexId({id})),
  setSelectedApartmentId: (id: number) =>
    dispatch(setSelectedApartmentId({id})),
});

export default connect(null, mapDispatchToProps)(Home);
