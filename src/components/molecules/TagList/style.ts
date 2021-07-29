import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  text-align: left;
  & > .tag {
    position: relative;
    display: inline-block;
    padding-right: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 4px;
    font-size: 12px;
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

  @media ${mq.tbMin_gt} {
    text-align: right;

    & > .tag {
      font-size: 14px;
    }
  }
`
