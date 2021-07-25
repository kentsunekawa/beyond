import { css } from 'styled-components'

export const base = css`
  padding: 16px 24px;
  & > .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid #ddd;
    & > .mainTitle {
      margin-bottom: 16px;
    }
    & > .dateArea {
      display: flex;
      flex-wrap: wrap;
      & > .date {
        display: block;
        width: 100%;
        font-size: 12px;
        &.-updatedat {
          margin-top: 4px;
        }
      }
    }
    & > .tags {
      margin-top: 16px;
      display: flex;
    }

    & > .insert {
      display: block;
      width: 100%;
      font-size: 16px;
      margin: 16px 0;
    }
  }
  & > .markdown-body {
    padding: 24px 0 72px;
  }
  & > .relatedPosts {
  }
`
