import { css } from 'styled-components'

export const base = css`
  & > .infoArea {
    padding: 0 24px 16px;
    & > .postNum {
      display: block;
      font-size: 14px;
      font-weight: bold;
    }
  }
  & > .list {
    & > .item {
      border-bottom: 1px solid #ddd;
    }
  }
`
