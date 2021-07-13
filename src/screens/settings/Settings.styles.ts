import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {brownGrey} from '../../ui/Colors';

export const Item = styled(View)`
  height: 60px;
  margin-top: 25px;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${brownGrey};
  line-height: 16px;
  margin-bottom: 10px;
`;

export const Value = styled<any>(Text)`
  color: ${props => (props.color ? props.color : '#4f5f8e')};
  font-size: 16px;
  line-height: 24px;
  font-weight: ${props => (props.bold ? 700 : 500)};
`;
