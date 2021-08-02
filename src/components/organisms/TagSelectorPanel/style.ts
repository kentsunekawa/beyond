import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  & > .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: block;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  }
  & > .panel {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    width: calc(100vw - 32px);
    height: auto;
    max-height: 80vh;
    background: ${({ theme }) => theme.backgroundColor};
    border: 2px solid ${({ theme }) => theme.colors.text};
    padding: 32px;
    & > .title {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    & > .tagList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-height: 300px;
      overflow-x: scroll;
      & > .tagItem {
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }
  }

  .clearButton {
    padding-top: 8px;
    text-align: center;
    padding-bottom: 8px;
  }
  .okButton {
    margin-top: 16px;
    width: 100%;
  }
  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
  }
  @media ${mq.tbMin_gt} {
    & > .overlay {
      display: none;
    }
    & > .panel {
      position: absolute;
      top: 100%;
      left: 0;
      transform: translate(0, -40px);
      width: 100%;
    }
    .okButton {
      width: 300px;
      margin: 16px auto 0;
    }
  }
`
