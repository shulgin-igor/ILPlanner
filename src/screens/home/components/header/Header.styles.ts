import styled from 'styled-components/native';
import {TouchableOpacity, View} from 'react-native';

export const Container = styled(View)`
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Button = styled(TouchableOpacity)`
  margin-left: 20px;
`;
