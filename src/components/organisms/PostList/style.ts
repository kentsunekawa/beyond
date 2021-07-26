import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  & > .infoArea {
    padding: 0 24px 16px;
    & > .postNum {
      display: block;
      font-size: 14px;
      font-weight: bold;
      text-align: right;
    }
  }
  & > .list {
    & > .message {
      display: block;
      text-align: center;
      padding: 16px 24px;
      color: #aaa;
      font-size: 18px;
    }
    & > .item {
      border-bottom: 1px solid #ddd;
    }
  }

  @media ${mq.tbMin_gt} {
    & > .infoArea {
      padding: 0;
    }
  }
`
