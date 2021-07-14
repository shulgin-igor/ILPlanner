import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'react-native';
import {brownGrey, cornFlower} from '../../../ui/Colors';

export const Item = styled(TouchableOpacity)`
  height: 60px;
  justify-content: center;
`;

export const ItemText = styled<any>(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${(props: any) => (props.selected ? cornFlower : brownGrey)};
  text-align: center;
`;
