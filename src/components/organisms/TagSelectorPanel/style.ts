import { css } from 'styled-components'

export const base = css`
  position: relative;
  width: calc(100vw - 32px);
  height: auto;
  max-height: 80vh;
  background: #fff;
  border: 2px solid #000;
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
`
