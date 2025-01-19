import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterContaier = styled.footer`
  padding: 40px 0;
  background-color: ${colors.backgroundColorMedium};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  margin-top: 32px;
  gap: 8px;
`
export const CopyrightContainer = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  max-width: 480px;
`
