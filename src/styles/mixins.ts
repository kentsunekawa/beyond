import { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { AppTheme } from 'styles/theme'

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
