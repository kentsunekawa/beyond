import { css } from 'styled-components'

export const baseStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    font-weight: 400;
    transition: background-color 0.2s linear;
    background: ${({ theme }) => theme.backgroundColor};
  }

  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
  }
`
