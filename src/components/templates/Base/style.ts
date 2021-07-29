import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  .main {
    padding-top: 60px;
    &.-index {
      padding-top: 0;
    }
    & > .inner {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }
  }

  @media ${mq.tbMin_gt} {
    .main {
      & > .inner {
        padding: 0 40px;
      }
    }
  }
`
