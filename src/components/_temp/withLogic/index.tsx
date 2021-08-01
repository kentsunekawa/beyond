import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'

const COMPONENT_NAME = 'ComponentName'

type StyleTypes = 'hoge' | 'fuga'

export type ComponentProps = {
  styleTypes?: StyleTypes[]
  children?: React.ReactNode
  className?: string
}

export type Props = ComponentProps & {
  someVar: string
}

const ComponentName: React.VFC<Props> = ({ someVar, children, className }) => (
  <div className={classNames(className, COMPONENT_NAME)}>{someVar}</div>
)

const Presenter = styled(ComponentName)`
  ${styles.base}
  ${({ styleTypes }) =>
    styleTypes && styleTypes.map((styleType) => styles[styleType])}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
  const someVar = 'someVar'

  const props = { someVar }

  return <Presenter {...componentProps} {...props} />
}

export default Container
