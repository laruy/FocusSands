import styled from 'styled-components/native';
import { BG_DEFAULT } from '../../shared/colors';

export const Container = styled.View`
  padding: 10px;
  background-color: ${BG_DEFAULT};
  padding-top: 70px;
  height: 100%;
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 60px 0 0;
`;

export const ContentBody = styled.View`
  align-items: center;
`;
export const ContentFooter = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px;
  left: 0;
  right: 0;
`;

export const Title = styled.Text`
  margin: 40px;
  text-align: center;
  font-size: 25px;
  color: #ffde59;
`;

export const Description = styled.Text`
  margin: 10px;
  font-size: 17px;
  color: #83bdff;
  align-items: center;
  text-align: center;
`;
