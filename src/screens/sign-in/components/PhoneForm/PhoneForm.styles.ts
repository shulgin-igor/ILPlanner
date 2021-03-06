import styled from 'styled-components/native';
import {orangeRed} from '../../../../ui/Colors';

export const Container = styled.View`
  flex: 1;
`;
export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
export const TextInput = styled.TextInput<any>`
  width: 100%;
  height: 60px;
  border: 2px solid ${props => (props.hasError ? orangeRed : '#ecebeb')};
  border-radius: 10px;
  font-size: 24px;
  line-height: 32px;
  color: #4f5f8e;
  font-weight: 700;
  padding-left: 50px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #5e76fa;
  margin: 0 30px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;
