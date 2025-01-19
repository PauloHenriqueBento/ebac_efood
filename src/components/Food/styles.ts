import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.backgroundColorDark};
  padding: 8px;
  color: ${colors.textColorSecundary};
  position: relative;

  > img {
    max-height: 217px;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    margin: 8px 0;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
