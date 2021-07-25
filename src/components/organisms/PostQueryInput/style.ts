import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  position: relative;
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
    font-size: 30px;
  }

  @media ${mq.tbMin_gt} {
    padding: 40px 0;
    justify-content: space-between;
    & > .keyword {
      width: calc(100% - 172px);
      margin-bottom: 0;
    }
    & > .tagSelectorButton {
      width: 120px;
      margin-right: 0;
    }
    & > .SearchButton {
      width: 40px;
    }
  }
`
