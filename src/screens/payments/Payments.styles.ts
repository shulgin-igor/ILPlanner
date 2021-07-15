import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {success, warning} from '../../ui/Colors';

export const Notification = styled<any>(View)`
  padding: 20px;
  background-color: ${props => (props.pending ? warning : success)};
`;

export const NotificationText = styled(Text)`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
`;
