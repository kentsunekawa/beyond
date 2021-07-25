import { css } from 'styled-components'

export const base = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 24px;
  & > .button {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #efefef;
    margin: 0 4px;
    font-size: 16px;
    &.-active {
      background: #333;
      color: #fff;
    }
    &.-next,
    &.-prev {
      font-size: 12px;
    }
  }
`
