import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../../../../ui/Styles';

class Item extends React.Component<any, any> {
  render() {
    const {caption, link, navigation, icon} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(link)}
        style={{flex: 1, justifyContent: 'center'}}>
        <Card style={styles.container}>
          <View style={styles.iconWrapper}>{icon}</View>
          <Text style={styles.caption}>{caption}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
  },
  caption: {
    color: '#4f5f8e',
    fontSize: 16,
    fontWeight: '500',
  },
  iconWrapper: {
    marginBottom: 10,
  },
});

export default (props: any) => {
  const navigation = useNavigation();
  return <Item {...props} navigation={navigation} />;
};
