import { css } from 'styled-components'
import { eng } from 'styles/mixins'

export const base = css`
  position: relative;
  width: 100%;
  height: 200px;
  background: #efefef;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    .title {
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
    }
    .catch {
      display: block;
      text-align: center;
      font-size: 1.2rem;
      margin-top: 5px;
      font-weight: 600;
    }
  }
`
