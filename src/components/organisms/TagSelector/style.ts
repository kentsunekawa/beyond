import { css } from 'styled-components'

export const base = css`
  & > .openButton {
    position: relative;
    & > .num {
      position: absolute;
      top: 4px;
      right: 8px;
      color: #fff;
      display: block;
    }
  }
  & > .panel {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
  }
`
