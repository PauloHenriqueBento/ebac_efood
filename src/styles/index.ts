import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${colors.textColorPrimary}
  }

  body {
    background-color: ${colors.backgroundColorLight};
    color: ${colors.textColorPrimary};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
