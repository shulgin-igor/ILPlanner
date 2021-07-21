import styled from 'styled-components/native';
import {TouchableOpacity, View} from 'react-native';
import {cornFlower} from '../../../../ui/Colors';

export const Container = styled(View)`
  padding: 62px 30px 32px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${cornFlower};
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Button = styled(TouchableOpacity)`
  margin-left: 20px;
`;
