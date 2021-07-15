import React from 'react';
import {TabView} from 'react-native-tab-view';
import {View} from 'react-native';
import {StyledTabBar, Label, Indicator} from './CustomTabBar.styles';

export default class CustomTabBar extends React.Component<any, any> {
  state = {index: 0};

  _renderLabel(route: any) {
    return (
      <Label active={this.props.routes[this.state.index].key === route.key}>
        {route.title}
      </Label>
    );
  }

  _renderIndicator(props: any) {
    return <Indicator {...props} />;
  }

  _renderTabBar(props: any) {
    return (
      <View>
        <StyledTabBar
          {...props}
          renderLabel={({route}) => this._renderLabel(route)}
          renderIndicator={this._renderIndicator}
          scrollEnabled={true}
        />
      </View>
    );
  }

  _setIndex(index: any) {
    this.setState({index});
  }

  render() {
    const {routes} = this.props;
    const {index} = this.state;
    return (
      <TabView
        renderTabBar={props => this._renderTabBar(props)}
        navigationState={{index, routes}}
        renderScene={route => this.props.renderScene(route)}
        onIndexChange={(newIndex: number) => this._setIndex(newIndex)}
      />
    );
  }
}
