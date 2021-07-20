import { css } from 'styled-components'

export const base = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #333;
  color: #fff;
  font-size: 14px;
  height: 40px;
  width: 100%;
  &.-disabled {
    opacity: 0.3;
  }
`

export const gray = css`
  background: #efefed;
  color: #333;
`
