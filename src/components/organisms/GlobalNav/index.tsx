import React from 'react'
import styled from 'styled-components'

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
      <ul className='navLint'>
        <li className='navItem'>
          <TextLink className='navBtn' href={PATH.top}>
            TOP
          </TextLink>
        </li>
        <li>
          <TextLink className='navBtn' href={PATH.posts}>
            POSTS
          </TextLink>
        </li>
        <li>
          <TextLink className='navBtn' href={PATH.about}>
            ABOUT
          </TextLink>
        </li>
      </ul>
    </nav>
    <ModeChanger />
  </div>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = () => {
  return <Presenter></Presenter>
}

export default React.memo(Container)
