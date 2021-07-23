import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {cornFlower} from '../../ui/Colors';

export const CarouselContainer = styled.View`
  background-color: ${cornFlower};
  padding-bottom: 37px;
`;

export const EmptyStateContainer = styled.View`
  flex: 1;
  background-color: ${cornFlower};
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  width: 70%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
`;
