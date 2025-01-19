import styled from 'styled-components'
import { colors } from '../../styles/colors'

type ButtonContainerProps = {
  color?: 'primary' | 'secundary'
  large?: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;

  background-color: ${({ color }) =>
    color == 'primary'
      ? colors.backgroundColorDark
      : colors.backgroundColorMedium};
  color: ${({ color }) =>
    color == 'primary' ? colors.textColorSecundary : colors.textColorPrimary};

  display: ${({ large }) => (large ? 'block' : 'inline-block')};
  width: ${({ large }) => (large ? '100%' : 'auto')};
`
