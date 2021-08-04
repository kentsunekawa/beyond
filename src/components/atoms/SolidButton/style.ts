import { css } from 'styled-components'
import { linkHover } from 'styles/mixins'

export const base = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 14px;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  &.-disabled {
    opacity: 0.3;
  }
  ${linkHover()}
`

export const gray = css`
  background: #efefed;
  color: #333;
`
