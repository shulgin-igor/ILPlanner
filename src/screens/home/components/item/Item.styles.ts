import styled from 'styled-components/native';
import {brownGrey, cornFlower} from '../../../../ui/Colors';

export const Container = styled.View`
  padding: 20px 30px;
`;

export const Date = styled.Text`
  color: ${cornFlower};
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`;

export const Caption = styled.Text`
  font-size: 14px;
  color: ${brownGrey};
  line-height: 18px;
  font-weight: 500;
`;
