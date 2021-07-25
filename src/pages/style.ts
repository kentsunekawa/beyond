import { css } from 'styled-components'
import { mq } from 'styles/constants'

export const base = css`
  .listHeader {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }

  .listFooter {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }

  @media ${mq.tbMin_gt} {
    .listHeader {
      padding: 40px 0;
    }

    .listFooter {
      padding: 40px 0;
    }
  }
`
