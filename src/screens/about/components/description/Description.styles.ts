import styled from 'styled-components/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {brownGrey, cornFlower} from '../../../../ui/Colors';

export const Container = styled(View)`
  padding: 20px;
  background-color: ${cornFlower};
  flex-direction: row;
`;

export const Content = styled(View)`
  margin-left: 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
`;

export const ContentItem = styled(Text)`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled(TouchableOpacity)`
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const StageItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StageTitle = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${brownGrey};
`;

export const StageDate = styled(StageTitle)`
  font-weight: 500;
`;
