import React from 'react'
import styled from '@emotion/styled'

import * as styles from './style'
import { PATH } from 'utils/constants'
import ModeChanger from 'components/atoms/ModeChanger'
import TextLink from 'components/atoms/TextLink'

interface ComponentProps {
  className?: string
}

type Props = ComponentProps

const Structure: React.VFC<Props> = ({ className }) => (
  <div className={className}>
    <nav className='nav'>
      <ul>
        <li>
          <TextLink href={PATH.top}>TOP</TextLink>
        </li>
        <li>
          <TextLink href={PATH.posts}>POSTS</TextLink>
        </li>
        <li>
          <TextLink href={PATH.about}>ABOUT</TextLink>
        </li>
      </ul>
    </nav>
    <div className='modeChanger'>
      <ModeChanger />
    </div>
  </div>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = () => {
  return <Presenter></Presenter>
}

export default React.memo(Container)
