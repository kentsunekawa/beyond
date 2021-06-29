import { css } from '@emotion/react'

export const base = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  & > .inner {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-right: 20px;
    & > .logo {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
