import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import * as styles from './style'

interface ComponentProps {
  href: string
  className?: string
  children?: React.ReactNode
}

type Props = ComponentProps

const Structure: React.VFC<Props> = ({ href, className, children }) => (
  <Link href={href}>
    <button className={className}>{children}</button>
  </Link>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.VFC<ComponentProps> = (ComponentProps) => {
  return <Presenter {...ComponentProps}></Presenter>
}

export default Container
