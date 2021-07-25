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
  & > .tagList {
    display: flex;
    & > .tag {
      position: relative;
      padding-right: 8px;
      margin-right: 4px;
      font-size: 12px;
      &:last-child {
        padding-right: 4px;
        margin-right: 0;
        &:after {
          content: none;
        }
      }
      &:after {
        position: absolute;
        right: 0;
        top: 0;
        content: '/';
      }
    }
  }

  ${linkHover()}
  @media ${mq.tbMin_gt} {
    padding: 40px 0;
  }
`
