import { css } from '@emotion/react'

export const base = css`
  position: relative;
  width: 100%;
  height: 200px;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    .title {
      display: block;
      text-align: center;
    }
    .catch {
      display: block;
      text-align: center;
    }
  }
`
