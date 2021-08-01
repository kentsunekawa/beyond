import { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'Window'

export type ComponentProps = {
  children?: React.ReactNode
  className?: string
}

export type Props = ComponentProps & {
  domRefs: { root: React.RefObject<HTMLDivElement> }
}

const Window: React.VFC<Props> = ({ domRefs, children, className }) => (
  <div ref={domRefs.root} className={classNames(className, COMPONENT_NAME)}>
    {children}
  </div>
)

const Presenter = styled(Window)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
  const domRefs = {
    root: useRef<HTMLDivElement>(null),
  }

  const scrollFunc = useCallback(() => {
    if (domRefs.root.current) {
      if (window.scrollY > 30) {
        domRefs.root.current.classList.add('-scroll')
      } else {
        domRefs.root.current.classList.remove('-scroll')
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)

    return () => {
      window.removeEventListener('scroll', scrollFunc)
    }
  }, [])

  const props = { domRefs }

  return <Presenter {...componentProps} {...props} />
}

export default Container
