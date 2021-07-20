import React from 'react';
import {Text} from 'react-native';
import {getPost} from '../../services/news.service';
import Loading from '../../components/loading/Loading';
import {ContentContainer} from '../../ui/Styles';

export default class NewsPost extends React.Component<any, any> {
  state: any = {
    item: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const {params} = this.props.route;
    const {data} = await getPost(params.postId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({isLoaded: true, item: data});
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    const {item} = this.state;

    return (
      <ContentContainer>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </ContentContainer>
    );
  }
}
