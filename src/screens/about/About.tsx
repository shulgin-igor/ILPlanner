import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Specs} from './components/specs/Specs';
import {Company} from './components/company/Company';
import {Docs} from './components/docs/Docs';
import {Gallery} from './components/gallery/Gallery';

const renderScene = SceneMap({
  specs: () => <Specs />,
  company: () => <Company />,
  docs: () => <Docs />,
  gallery: () => <Gallery />,
});

export class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
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
    };
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
    const {routes, index} = this.state;
    return (
      <TabView
        renderTabBar={props => this._renderTabBar(props)}
        navigationState={{index, routes}}
        renderScene={renderScene}
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
