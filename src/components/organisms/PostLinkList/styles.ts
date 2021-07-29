import { css } from 'styled-components'
import { mq } from 'styles/constants'
import { linkHover } from 'styles/mixins'

export const base = css`
  padding: 64px 16px 40px;
  & > .title {
    margin-bottom: 16px;
  }
  & > .links {
    & > a {
      display: block;
      font-size: 16px;
      font-weight: bold;
      padding: 16px 0;
      border-bottom: 1px solid #ddd;
      line-height: 1.6em;
      ${linkHover()}
    }
  }
  @media ${mq.tbMin_gt} {
    padding: 80px 24px 40px;
    & > .title {
      margin-bottom: 40px;
    }
    & > .links {
      & > a {
        font-size: 20px;
        padding: 24px 0;
      }
    }
  }
`
