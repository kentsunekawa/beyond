import { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { AppTheme } from 'styles/theme'
import { mq } from 'styles/constants'

export const eng = (theme: AppTheme): FlattenSimpleInterpolation => css`
  font-family: ${theme.font.eng};
`

export const aspectFix = (
  width = 1,
  height = 1,
): FlattenSimpleInterpolation => css`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: ${(height / width) * 100}%;
  }
`

export const linkHover = (): FlattenSimpleInterpolation => css`
  cursor: pointer;
  @media ${mq.tbMin_gt} {
    transition: opacity 0.2s linear;
    &:hover {
      opacity: 0.7;
    }
  }
`
