import { css } from 'styled-components'
import { rgba } from 'polished'

export const base = css`
  .Header {
    transition: background-color 0.25s linear;
  }
  &.-scroll {
    .Header {
      background: ${({ theme }) => rgba(theme.backgroundColor, 0.9)};
      transition: background-color 0.25s linear;
    }
  }
`
