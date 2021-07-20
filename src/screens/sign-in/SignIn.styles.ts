import styled from 'styled-components/native';
import {ScreenContainer} from '../../ui/Styles';
import {Text, View} from 'react-native';
import {brownGrey, orangeRed} from '../../ui/Colors';

export const Container = styled(ScreenContainer)`
  justify-content: space-between;
  padding-bottom: 75px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #ffffff;
  position: absolute;
`;

export const Header = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${brownGrey};
  margin-bottom: 8px;
  text-align: center;
`;

export const ValidationError = styled(Text)`
  color: ${orangeRed};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 10px 0;
  text-align: center;
`;
