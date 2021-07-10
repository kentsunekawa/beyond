import { css } from 'styled-components'

export const base = css`
  .main {
    padding-top: 60px;
    &.-index {
      padding-top: 0;
    }
    & > .inner {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`
