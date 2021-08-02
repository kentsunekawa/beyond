import { css } from 'styled-components'

export const base = css`
  & > .openButton {
    position: relative;
    & > .num {
      position: absolute;
      top: 4px;
      right: 8px;
      color: ${({ theme }) => theme.backgroundColor};
      display: block;
    }
  }
`
