import { css } from 'styled-components'
import { linkHover } from 'styles/mixins'

export const base = css`
  padding: 0.5em;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #707070;
  ${linkHover()}
`
