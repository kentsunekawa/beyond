import { css } from 'styled-components'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: block;
  font-size: 16px;
  background: #ddd;
  padding: 0.5em;
  border-radius: 4px;
  &.-selected {
    background: #333;
    color: #fff;
  }
  & > .text {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  input {
    display: none;
  }
  ${linkHover()}
`
