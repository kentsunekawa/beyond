import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  padding: 16px 24px;
  & > .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid #ddd;
    & > .mainTitle {
      margin-bottom: 16px;
    }
    & > .dateArea {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      & > .date {
        display: block;
        width: 100%;
        font-size: 12px;
        span {
          font-weight: bold;
        }
        &.-updatedat {
          margin-top: 4px;
        }
      }
    }
    & > .TagList {
      width: 100%;
      margin-top: 16px;
    }

    & > .insert {
      display: block;
      width: 100%;
      font-size: 16px;
      padding-top: 16px;
    }
  }
  & > .markdown-body {
    padding: 24px 0 88px;
    border-bottom: 1px solid #ddd;
  }

  @media ${mq.pcMin_gt} {
    padding: 88px 0;
    & > .header {
      align-items: flex-start;
      align-content: flex-start;
      border-bottom: none;
      padding-bottom: 104px;
      & > .mainTitle {
        margin-bottom: 20px;
      }
      & > .dateArea {
        width: auto;
        & > .date {
          width: auto;
          font-size: 14px;
          &.-updatedat {
            margin-top: 0;
            margin-left: 16px;
          }
        }
      }
      & > .TagList {
        width: auto;
        margin-top: 0;
      }
      & > .insert {
        padding-top: 56px;
      }
    }
    & > .markdown-body {
      padding: 0 0 128px;
    }
  }
`
