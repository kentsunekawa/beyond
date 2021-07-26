import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  padding: 0 24px;
  & > .row {
    display: flex;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
    & > .label {
      display: block;
      font-size: 14px;
      padding-right: 8px;
      width: 80px;
    }
    & > .value {
      display: block;
      font-size: 16px;
      font-weight: bold;
      word-break: break-all;
      width: calc(100% - 80px);
      & > .tag {
        position: relative;
        display: inline-block;
        padding-right: 0.5em;
        margin-right: 0.5em;
        margin-bottom: 4px;
        &:after {
          content: '/';
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(50%);
        }
        &:last-child {
          padding-right: 0;
          margin-right: 0;
          &:after {
            content: none;
          }
        }
      }
    }
  }
  @media ${mq.tbMin_gt} {
    padding: 0;
  }
`
