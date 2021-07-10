import { useReactiveVar } from '@apollo/client'
import styled from 'styled-components'
import * as styles from './style'
import { modeVar } from 'cache'
import { Mode } from 'types'
import GoogleMaterialIcons from 'components/atoms/icons/GoogleMaterialIcons'

interface ComponentProps {
  className?: string
}

interface Props extends ComponentProps {
  mode: Mode
  modeChange: () => void
}

const Structure: React.VFC<Props> = ({ mode, modeChange, className }) => (
  <label className={`${className} -${mode}`}>
    <GoogleMaterialIcons iconName='lightbulb' />
    <input type='checkbox' checked={mode === 'dark'} onChange={modeChange} />
  </label>
)

const Presenter = styled(Structure)`
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
