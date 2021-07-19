import { css } from 'styled-components'
import { aspectFix } from 'styles/mixins'

export const base = css`
  display: block;
  width: 40px;
  ${aspectFix()}
  & > .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
`
