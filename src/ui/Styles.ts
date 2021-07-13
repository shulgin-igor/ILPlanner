import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';
import {veryLightPink} from './Colors';

export const ScreenContainer = styled(View)`
  flex: 1;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  padding: 15px 30px;
`;

export const ContentList = styled(FlatList)`
  padding: 15px 30px;
`;

export const Card = styled(View)`
  flex: 1;
  shadow-color: 'rgba(101, 101, 101, 0.13)';
  shadow-offset: 0 5px;
  shadow-radius: 30px;
  shadow-opacity: 1;
  border-radius: 10px;
  background: #fff;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

export const Line = styled(View)`
  height: 2px;
  background-color: ${veryLightPink};
`;
