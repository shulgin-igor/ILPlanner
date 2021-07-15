import styled from 'styled-components/native';
import {TabBar, TabBarIndicator} from 'react-native-tab-view';
import {Text} from 'react-native';
import {brownGrey, cornFlower} from '../../ui/Colors';

export const StyledTabBar = styled(TabBar)`
  background-color: #fff;
`;

export const Label = styled<any>(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.active ? cornFlower : brownGrey)};
  padding: 7px 0;
`;

export const Indicator = styled(TabBarIndicator)`
  background-color: ${cornFlower};
`;
