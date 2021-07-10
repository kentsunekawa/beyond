import { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { AppTheme } from 'styles/theme'

export const eng = (theme: AppTheme): FlattenSimpleInterpolation => css`
  font-family: ${theme.font.eng};
`
