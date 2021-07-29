import { useReactiveVar } from '@apollo/client'
import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './style'
import { modeVar } from 'cache'
import { Mode } from 'types'
import GoogleMaterialIcons from 'components/atoms/icons/GoogleMaterialIcons'

const COMPONENT_NAME = 'ModeChanger'

interface ComponentProps {
  className?: string
}

interface Props extends ComponentProps {
  mode: Mode
  modeChange: () => void
}

const ModeChanger: React.VFC<Props> = ({ mode, modeChange, className }) => (
  <label className={classNames(className, COMPONENT_NAME, `-${mode}`)}>
    <GoogleMaterialIcons iconName='lightbulb' />
    <input type='checkbox' checked={mode === 'dark'} onChange={modeChange} />
  </label>
)

const Presenter = styled(ModeChanger)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = () => {
  const mode = useReactiveVar<Mode>(modeVar)

  const modeChange = () => {
    modeVar(mode === 'light' ? 'dark' : 'light')
  }

  const props = { mode, modeChange }

  return <Presenter {...props} />
}

export default Container
