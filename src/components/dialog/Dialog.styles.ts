import styled from 'styled-components/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from '../../ui/Styles';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(121, 121, 121, 0.7);
`;

export const Container = styled(Card)`
  flex: none;
  width: 320px;
`;

export const Header = styled(View)`
  align-items: center;
`;

export const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  top: 7px;
`;

export const Title = styled(Text)`
  text-align: center;
  color: #4f5f8e;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 33px;
  max-width: 200px;
  font-weight: 500;
`;
