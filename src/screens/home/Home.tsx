import React from 'react';
import {Dimensions, FlatList} from 'react-native';
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
import {ScreenContainer} from '../../ui/Styles';
import {CarouselContainer, EmptyStateContainer, EmptyText} from './Home.styles';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {getFeed} from '../../services/home.service';
import NavigationItem from './components/navigation-item/NavigationItem';

const {width: viewportWidth} = Dimensions.get('window');
const navigationItems = [
  {
    icon: <Wallet width={30} height={30} fill="#fff" />,
    caption: 'Платежі',
    link: 'Payments',
  },
  {
    icon: <Door width={30} height={30} fill="#fff" />,
    caption: 'Квартира',
    link: 'MyApartment',
  },
  {
    icon: <Building width={30} height={30} fill="#fff" />,
    caption: 'Про ЖК',
    link: 'About',
  },
  {
    icon: <Megaphone width={30} height={30} fill="#fff" />,
    caption: 'Новини',
    link: 'News',
  },
];

class Home extends React.Component<any, any> {
  state: any = {
    items: [],
    feed: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const {data} = await getList();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({items: data, isLoaded: true});
    this._onApartmentChanged(data[0]);
  }

  async _onApartmentChanged(apartment: any) {
    const {data} = await getFeed(apartment.id);
    this.setState({feed: data});

    this.props.setSelectedApartmentId(apartment.id);
    this.props.setSelectedComplexId(apartment.planning.complex.id);
  }

  _renderItem({item}: any) {
    return <Item type={item.type} caption={item.caption} date={item.date} />;
  }

  _renderCarouselItem({item}: any) {
    return <CarouselItem data={item} />;
  }

  _renderNavigationItem({item}: any) {
    return (
      <NavigationItem
        icon={item.icon}
        caption={item.caption}
        link={item.link}
      />
    );
  }

  _renderContent() {
    const {items} = this.state;

    if (items.length === 0) {
      return (
        <EmptyStateContainer>
          <Door width="100" height="100" />
          <EmptyText>У вас немає активних розстрочок</EmptyText>
        </EmptyStateContainer>
      );
    }
    return (
      <ScreenContainer>
        <CarouselContainer>
          <Carousel
            data={items}
            inactiveSlideOpacity={0.3}
            renderItem={this._renderCarouselItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth - 54}
            scrollEnabled={items.length > 1}
            onSnapToItem={index => {
              const data = this.state.items[index];
              this._onApartmentChanged(data);
            }}
          />
          <FlatList
            data={navigationItems}
            renderItem={this._renderNavigationItem}
            numColumns={navigationItems.length}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{paddingHorizontal: 20}}
          />
        </CarouselContainer>
        <BottomSheet
          style={{marginHorizontal: '2%'}}
          snapPoints={['50%', '90%']}>
          <BottomSheetFlatList
            data={this.state.feed}
            renderItem={this._renderItem}
          />
        </BottomSheet>
      </ScreenContainer>
    );
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    return (
      <ScreenContainer>
        <Header />
        {this._renderContent()}
      </ScreenContainer>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setSelectedComplexId: (id: number) => dispatch(setSelectedComplexId({id})),
  setSelectedApartmentId: (id: number) =>
    dispatch(setSelectedApartmentId({id})),
});

export default connect(null, mapDispatchToProps)(Home);
