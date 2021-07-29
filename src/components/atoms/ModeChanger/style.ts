import { css } from 'styled-components'
import { mq } from 'styles/constants'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  align-content: center;
  input {
    display: none;
  }
  &.-dark {
    color: #fff;
  }
  ${linkHover()}
  @media ${mq.tbMin_gt} {
    font-size: 28px;
  }
`
