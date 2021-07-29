import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'TextLink'

interface ComponentProps {
  href: string
  className?: string
  children?: React.ReactNode
}

type Props = ComponentProps

const TextLink: React.VFC<Props> = ({ href, className, children }) => (
  <Link href={href}>
    <button className={classNames(className, COMPONENT_NAME)}>
      {children}
    </button>
  </Link>
)

const Presenter = styled(TextLink)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = (ComponentProps) => {
  return <Presenter {...ComponentProps}></Presenter>
}

export default Container
