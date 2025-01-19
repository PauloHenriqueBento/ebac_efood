import styled from 'styled-components'
import { Props } from '.'
import background from '../../assets/background_header.png'

export const HeaderContainer = styled.header<Props>`
  background-image: url(${background});
  padding-top: 40px;
  padding-bottom: ${({ isHome }) => (isHome ? '40px' : '64px')};
  nav {
    display: flex;
    align-items: center;
    justify-content: ${({ isHome }) => (isHome ? 'center' : 'space-between')};
  }
`

export const HeaderTitle = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-top: 140px;
`
