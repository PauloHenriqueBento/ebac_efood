import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.textColorPrimary};
  position: relative;

  > img {
    max-height: 217px;
    width: 100%;
    object-fit: cover;
  }
`
export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
export const Tag = styled.span`
  color: ${colors.textColorSecundary};
  padding: 6px 4px;
  background-color: ${colors.backgroundColorDark};
  font-weight: bold;
  font-size: 12px;
`

export const CardContent = styled.div`
  padding: 8px;
  border: 1px solid ${colors.backgroundColorDark};
  margin-top: -5px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
