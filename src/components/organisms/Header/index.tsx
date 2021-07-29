import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'

import * as styles from './style'
import GlobalNav from 'components/organisms/GlobalNav'

const COMPONENT_NAME = 'Header'

interface ContainerProps {
  logo: boolean
  className?: string
}

type Props = ContainerProps

const Header: React.VFC<Props> = ({ logo, className }) => {
  return (
    <header className={classNames(className, COMPONENT_NAME)}>
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

const Presenter = styled(Header)`
  ${styles.base}
`

const Container: React.VFC<ContainerProps> = ({ logo }) => {
  return <Presenter logo={logo}></Presenter>
}

export default React.memo(Container)
