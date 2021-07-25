import { css } from 'styled-components'
import { mq } from 'styles/constants'

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

  @media ${mq.tbMin_gt} {
    & > .panel {
      position: absolute;
      top: 100%;
      left: 0;
      transform: translate(0, -40px);
      width: 100%;
    }
  }
`
