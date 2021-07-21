import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {brownGrey} from '../../ui/Colors';

export const EmptyStateContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateText = styled(Text)`
  font-size: 24px;
  line-height: 32px;
  color: ${brownGrey};
  font-weight: 500;
`;
