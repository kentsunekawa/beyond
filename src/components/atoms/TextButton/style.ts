import { css } from 'styled-components'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: inline-block;
  padding: 0.5em;
  font-size: 14px;
  ${linkHover()}
`
