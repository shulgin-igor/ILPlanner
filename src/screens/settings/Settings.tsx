import React from 'react';
import {ContentContainer, Line} from '../../ui/Styles';
import {Item, Label, Value} from './Settings.styles';
import NotificationSelector from './components/NotificationSelector';
import {TouchableOpacity} from 'react-native';
import {getSettings} from '../../services/settings.service';
import {orangeRed} from '../../ui/Colors';
import {logout} from '../../services/auth.service';

export default class Settings extends React.Component<any, any> {
  state = {selectorOpened: false, notificationDuration: null};

  _toggleSelectorState(state: boolean) {
    this.setState({selectorOpened: state});
  }

  _updateNotificationTime(value: number) {
    this._toggleSelectorState(false);
  }

  async _logout() {
    await logout();
  }

  async componentDidMount() {
    const settings = await getSettings();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({...settings});
  }

  render() {
    return (
      <ContentContainer>
        <NotificationSelector
          value={this.state.notificationDuration}
          opened={this.state.selectorOpened}
          onDismiss={() => this._toggleSelectorState(false)}
          onSelect={(value: number) => this._updateNotificationTime(value)}
        />
        <TouchableOpacity>
          <Item>
            <Label>Сповіщення</Label>
            <Value>Зміна вартості, Новини, Чат</Value>
          </Item>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity onPress={() => this._toggleSelectorState(true)}>
          <Item>
            <Label>Нагадування про платіж</Label>
            <Value>За 14 днів</Value>
          </Item>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity>
          <Item>
            <Label>Допомога</Label>
            <Value>Перейти до чату</Value>
          </Item>
        </TouchableOpacity>
        <Line />
        <Item>
          <Label>Версія</Label>
          <Value>0.0.1</Value>
        </Item>
        <Line />
        <TouchableOpacity onPress={this._logout}>
          <Item>
            <Value color={orangeRed} bold={true}>
              Вихід
            </Value>
          </Item>
        </TouchableOpacity>
      </ContentContainer>
    );
  }
}
