import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface IContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

interface ITextContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View`
  width: 86%;
  height: 50px;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: red;
`;

export const IContainer = styled.View<IContainerProps>`
  width: 55px;
  height: 50px;
  justify-content: center;
  align-items: center;

  ${({ isFocused, isFilled }: IContainerProps) =>
    (isFocused || isFilled) &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #ffffff;
    `};

  ${({ hasError }: IContainerProps) =>
    hasError &&
    css`
      border-bottom-color: red;
    `};

  margin-right: 3px;
  border-radius: 5px;
`;

export const InputText = styled(TextInput)<ITextContainerProps>`
    flex: 1;
    font-size: 12px;
    border-radius: 5px;
    color: #014BA0
    background-color: #F0EBEB;

    ${({ isFocused, isFilled }: IContainerProps) =>
      (isFocused || isFilled) &&
      css`
        border-bottom-width: 2px;
        border-bottom-color: #ffffff;
      `};

    ${({ hasError }: IContainerProps) =>
      hasError &&
      css`
        border-bottom-color: red;
      `};

    padding: 0px 10px;
`;
