import { css } from 'styled-components'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: block;
  font-size: 16px;
  background: ${({ theme }) => theme.backgroundColor};
  padding: 0.5em;
  border-radius: 4px;
  &.-selected {
    background: #333;
    color: #fff;
    border: 1px solid #fff;
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
