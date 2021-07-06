import styled from 'styled-components/native';
import {Image, Text, View} from 'react-native';

export const Container = styled(View)`
  margin-bottom: 20px;
`;

export const GalleryPreview = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  color: #4f5f8e;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
`;
