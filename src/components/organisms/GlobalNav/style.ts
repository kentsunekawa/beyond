import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  & > .nav {
    & > .navLint {
      display: flex;
      .TextLink {
        font-size: 12px;
        color: #999;
      }
    }
  }

  @media ${mq.tbMin_gt} {
    & > .nav {
      & > .navLint {
        & > .navItem {
          margin: 0 8px;
        }
        .TextLink {
          font-size: 14px;
        }
      }
    }
  }
`
