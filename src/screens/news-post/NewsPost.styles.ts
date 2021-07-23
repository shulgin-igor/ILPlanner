import styled from 'styled-components/native';
import {brownGrey, cornFlower, veryLightPink} from '../../ui/Colors';

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${cornFlower};
`;

export const Date = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: ${veryLightPink};
`;

export const Content = styled.Text`
  color: ${brownGrey};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 20px;
`;
