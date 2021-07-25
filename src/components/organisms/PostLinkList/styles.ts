import { css } from 'styled-components'

export const base = css`
  & > .title {
    margin-bottom: 16px;
  }
  & > .links {
    & > a {
      display: block;
      font-size: 16px;
      font-weight: bold;
      padding: 16px 0;
      border-bottom: 1px solid #ddd;
      line-height: 1.6em;
    }
  }
`
