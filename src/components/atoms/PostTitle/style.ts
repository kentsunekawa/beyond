import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  display: block;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4em;

  @media ${mq.pcMin_gt} {
    font-size: 36px;
  }
`
