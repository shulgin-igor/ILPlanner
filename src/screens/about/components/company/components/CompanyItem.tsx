import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Card} from '../../../../../ui/Styles';

const aboutCaptions: any = {
  founded: 'рік заснування',
  completed: 'будинків здано',
  inProgress: 'будинків в процесі',
};
const contactsCaptions: any = {
  website: 'Офіційний сайт',
  phone: 'Номер телефону',
};

export class CompanyItem extends React.Component<any, any> {
  _renderItem({item}: any) {
    const {id, value} = item;
    return (
      <View style={styles.aboutItem}>
        <Text style={styles.aboutTitle}>{aboutCaptions[id]}</Text>
        <Text style={styles.aboutValue}>{value}</Text>
      </View>
    );
  }

  _renderContactsItem({item}: any) {
    const {id, value} = item;
    return (
      <View style={styles.contactsItem}>
        <Text style={styles.contactsTitle}>{contactsCaptions[id]}</Text>
        <Text style={styles.contactsValue}>{value}</Text>
      </View>
    );
  }

  render() {
    const {
      id,
      logo,
      title,
      founded,
      completedCount,
      inProgressCount,
      website,
      phone,
    } = this.props.data;
    const aboutItems = [
      {
        id: 'founded',
        value: founded,
      },
      {
        id: 'completed',
        value: completedCount,
      },
      {
        id: 'inProgress',
        value: inProgressCount,
      },
    ];

    const contactsItems = [
      {
        id: 'website',
        value: website,
      },
      {
        id: 'phone',
        value: phone,
      },
    ];

    return (
      <Card style={styles.container}>
        <Image
          source={{width: 140, height: 140, uri: logo}}
          width={50}
          height={100}
          resizeMode={'contain'}
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
        <FlatList
          style={styles.aboutList}
          data={aboutItems}
          renderItem={this._renderItem}
          numColumns={3}
          scrollEnabled={false}
          listKey={`about_${id}`}
        />
        <FlatList
          style={styles.contactsList}
          data={contactsItems}
          renderItem={this._renderContactsItem}
          scrollEnabled={false}
          listKey={`contacts_${id}`}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#4f5f8e',
    marginVertical: 10,
  },
  aboutList: {
    marginVertical: 10,
  },
  aboutItem: {
    flex: 1,
    marginHorizontal: 10,
  },
  aboutTitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#979797',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  aboutValue: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4f5f8e',
    textAlign: 'center',
  },
  contactsItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  contactsTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#979797',
  },
  contactsValue: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4f5f8e',
  },
  contactsList: {
    marginTop: 10,
  },
});
