import React from 'react';
import {Text} from 'react-native';
import {getPost} from '../../services/news.service';
import Loading from '../../components/loading/Loading';
import {ContentContainer} from '../../ui/Styles';
import {Title, Date, Content} from './NewsPost.styles';
import moment from 'moment';

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
        <Title>{item.title}</Title>
        <Date>{moment(item.date).format('DD MMM YYYY')}</Date>
        <Content>{item.text}</Content>
      </ContentContainer>
    );
  }
}
