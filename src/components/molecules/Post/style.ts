import { css } from 'styled-components'
import { mq } from 'styles/constants'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  cursor: pointer;
  & > .date {
    display: block;
    width: 100%;
    font-weight: bold;
    font-size: 12px;
  }
  & > .title {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0 16px;
  }
  & > .description {
    display: block;
    width: 100%;
    font-size: 14px;
    margin-bottom: 24px;
  }
  ${linkHover()} @media ${mq.tbMin_gt} {
    padding: 40px 0;
    & > .date {
      font-size: 16px;
    }
    & > .title {
      font-size: 34px;
      margin: 12px 0 24px;
    }
  }
`
