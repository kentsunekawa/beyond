import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  padding: 40px 0;
  .copyright {
    display: block;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }

  @media ${mq.tbMin_gt} {
    padding: 40px 0 72px;
    .copyright {
      font-size: 14px;
    }
  }
`
