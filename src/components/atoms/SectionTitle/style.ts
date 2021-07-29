import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  @media ${mq.tbMin_gt} {
    font-size: 22px;
  }
`
