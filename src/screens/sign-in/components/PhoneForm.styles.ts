import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
export const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  border: 2px solid #ecebeb;
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4f5f8e;
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
