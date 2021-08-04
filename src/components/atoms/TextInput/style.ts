import { css } from 'styled-components'

export const base = css`
  background: #efefef;
  border-radius: 5px;
  overflow: hidden;
  & > input {
    display: block;
    width: 100%;
    height: 100%;
    padding: 11px;
    font-size: 16px;
    color: #333;
  }
`
