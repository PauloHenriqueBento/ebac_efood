import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.backgroundColorDark};
  padding: 8px;
  color: ${colors.textColorSecundary};
  position: relative;
  display: flex;
  flex-direction: column;

  > img {
    height: 167px;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    margin: 8px 0;
  }

  ${ButtonContainer} {
    margin-top: auto;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
`
