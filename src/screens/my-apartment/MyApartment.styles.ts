import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {brownGrey, cornFlower} from '../../ui/Colors';

export const ListItem = styled(View)`
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  color: ${brownGrey};
  margin-bottom: 20px;
`;

export const ItemCaption = styled(Text)`
  width: 60%;
  font-size: 16px;
  line-height: 24px;
  color: ${brownGrey};
  padding-right: 40px;
  text-align: right;
`;

export const ItemValue = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  color: ${cornFlower};
`;
