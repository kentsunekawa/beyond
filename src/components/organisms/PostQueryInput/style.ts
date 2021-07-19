import { css } from 'styled-components'

export const base = css`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  & > .keyword {
    width: 100%;
    margin-bottom: 8px;
  }
  & > .tagSelectorButton {
    width: 30%;
    margin-right: 8px;
  }
  & > .SearchButton {
    width: calc(70% - 8px);
  }
`
