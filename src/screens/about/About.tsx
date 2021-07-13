import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import {Specs} from './components/specs/Specs';
import {Company} from './components/company/Company';
import {Docs} from './components/docs/Docs';
import {Gallery} from './components/gallery/Gallery';
import {getComplexInfo} from '../../services/complex.service';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import Loading from '../../components/loading/Loading';

class About extends React.Component<any, any> {
  state: any = {
    index: 0,
    routes: [
      {
        key: 'specs',
        title: 'Характеристики',
      },
      {
        key: 'gallery',
        title: 'Галерея',
      },
      {
        key: 'company',
        title: 'Девелопер',
      },
      {
        key: 'docs',
        title: 'Документы',
      },
    ],
    complex: null,
    loaded: false,
  };

  async componentDidMount() {
    const {data} = await getComplexInfo(this.props.complexId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({loaded: true, complex: data});
  }

  _renderScene({route}: any) {
    switch (route.key) {
      case 'specs':
        return <Specs items={this.state.complex?.specs} />;
      case 'company':
        return <Company items={this.state.complex?.developers} />;
      case 'docs':
        return <Docs />;
      case 'gallery':
        return <Gallery items={this.state.complex?.gallery} />;
      default:
        return null;
    }
  }

  _renderLabel(route: any) {
    return <Text style={styles.label}>{route.title}</Text>;
  }

  _renderTabBar(props: any) {
    return (
      <View>
        <View style={{height: 100, backgroundColor: 'red'}} />
        <TabBar
          {...props}
          style={styles.tabBar}
          renderLabel={({route}) => this._renderLabel(route)}
          indicatorStyle={styles.indicator}
          scrollEnabled={true}
        />
      </View>
    );
  }

  _setIndex(index: any) {
    this.setState({index});
  }
  render() {
    if (!this.state.loaded) {
      return <Loading />;
    }
    const {routes, index} = this.state;
    return (
      <TabView
        renderTabBar={props => this._renderTabBar(props)}
        navigationState={{index, routes}}
        renderScene={route => this._renderScene(route)}
        onIndexChange={(newIndex: number) => this._setIndex(newIndex)}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#979797',
    paddingVertical: 7,
  },
  indicator: {
    backgroundColor: '#5e76fa',
  },
});

const mapStateToProps = (state: RootState) => ({
  complexId: state.app.selectedComplexId,
});

export default connect(mapStateToProps)(About);
