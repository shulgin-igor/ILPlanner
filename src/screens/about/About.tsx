import React from 'react';
import {Specs} from './components/specs/Specs';
import {Company} from './components/company/Company';
import {Docs} from './components/docs/Docs';
import {Gallery} from './components/gallery/Gallery';
import {getComplexInfo} from '../../services/complex.service';
import {RootState} from '../../store';
import {connect} from 'react-redux';
import Loading from '../../components/loading/Loading';
import {ScreenContainer} from '../../ui/Styles';
import Description from './components/description/Description';
import CustomTabBar from '../../components/tab-bar/CustomTabBar';

const routes = [
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
];

class About extends React.Component<any, any> {
  state: any = {
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

  render() {
    if (!this.state.loaded) {
      return <Loading />;
    }

    const {logo, title, address, stages} = this.state.complex;

    return (
      <ScreenContainer>
        <Description
          logo={logo}
          title={title}
          address={address}
          stages={stages}
        />
        <CustomTabBar
          routes={routes}
          renderScene={(route: any) => this._renderScene(route)}
        />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  complexId: state.app.selectedComplexId,
});

export default connect(mapStateToProps)(About);
