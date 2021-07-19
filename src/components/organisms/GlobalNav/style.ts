import { css } from 'styled-components'

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
`
