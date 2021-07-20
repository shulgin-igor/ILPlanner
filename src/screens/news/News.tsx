import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScreenContainer, ContentList, Card} from '../../ui/Styles';
import {getNews} from '../../services/news.service';
import Loading from '../../components/loading/Loading';
import {RootState} from '../../store';
import {connect} from 'react-redux';

class News extends React.Component<any, any> {
  state = {
    items: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const {data} = await getNews(this.props.complexId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({isLoaded: true, items: data});
  }

  _renderItem({item}: any) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('NewsPost', {postId: item.id})
        }>
        <Card>
          <Text>{item.title}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    const {items} = this.state;
    return (
      <ScreenContainer>
        <ContentList
          data={items}
          renderItem={(item: any) => this._renderItem(item)}
        />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  complexId: state.app.selectedComplexId,
});

export default connect(mapStateToProps)(News);
