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
import {getHome} from '../../services/home.service';
import {AppDispatch} from '../../store';
import {connect} from 'react-redux';
import {setSelectedComplexId} from '../../store/appSlice';

const {width: viewportWidth} = Dimensions.get('window');

class Home extends React.Component<any, any> {
  state: any = {items: []};

  async componentDidMount() {
    const {data} = await getHome();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({items: data});
    this._onComplexChanged(data[0].id);
  }

  _onComplexChanged(id: number) {
    this.props.setSelectedComplexId(id);
  }

  _renderItem({item}: any) {
    return <Item icon={item.icon} caption={item.caption} link={item.link} />;
  }

  _renderCarouselItem({item}: any) {
    return <CarouselItem data={item} />;
  }

  render() {
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
              const id = this.state.items[index].id;
              this._onComplexChanged(id);
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
});

export default connect(null, mapDispatchToProps)(Home);
