import { css } from '@emotion/react'

export const base = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  & > nav {
    & > ul {
      display: flex;
    }
  }
  & > .modeChanger {
  }
`
