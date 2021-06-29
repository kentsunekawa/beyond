import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import * as styles from './style'
import GlobalNav from 'components/organisms/GlobalNav'

interface ContainerProps {
  logo: boolean
  className?: string
}

type Props = ContainerProps

const Structure: React.VFC<Props> = ({ logo, className }) => {
  return (
    <header className={className}>
      <div className='inner'>
        {logo && (
          <h1 className='logo'>
            <Link href='/'>BEYOND</Link>
          </h1>
        )}
        <GlobalNav />
      </div>
    </header>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ContainerProps> = ({ logo }) => {
  return <Presenter logo={logo}></Presenter>
}

export default React.memo(Container)
