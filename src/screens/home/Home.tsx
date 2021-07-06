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

const {width: viewportWidth} = Dimensions.get('window');

export class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Голосіївська Долина',
          address: 'вул. Євгена Коновальця, 19',
          progress: 0.4,
          companies: [
            {
              image: 'https://kmb.ua/wp-content/uploads/2017/08/logo-1.png',
              title: 'Київміськбуд',
            },
            {
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3KPA88D0t6GdA3PfzC3R24QSGXni9ee7bR7Pm8zSC_HbEypS4Q-GPQawz2BAo8B2fZo&usqp=CAU',
              title: 'РІЕЛ',
            },
            {
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3KPA88D0t6GdA3PfzC3R24QSGXni9ee7bR7Pm8zSC_HbEypS4Q-GPQawz2BAo8B2fZo&usqp=CAU',
              title: 'РІЕЛ',
            },
          ],
        },
        {
          id: 2,
          title: 'ЖК Заречный',
          progress: 0.85,
          companies: [],
        },
      ],
    };
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
