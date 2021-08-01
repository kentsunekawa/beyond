import { css } from 'styled-components'
import { mq } from 'styles/constants'
import { linkHover } from 'styles/mixins'

export const base = css`
  padding: 0.5em;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  ${linkHover()}

  @media ${mq.tbMin_gt} {
    font-size: 14px;
  }
`
