import { useReactiveVar } from '@apollo/client'
import styled from '@emotion/styled'
import * as styles from './style'
import { modeVar } from 'cache'
import { Mode } from 'types'

interface ComponentProps {
  className?: string
}

interface Props extends ComponentProps {
  mode: Mode
  modeChange: () => void
}

const Structure: React.VFC<Props> = ({ mode, modeChange, className }) => (
  <div className={`${className} -${mode}`}>
    <label>
      ●
      <input type='checkbox' checked={mode === 'dark'} onChange={modeChange} />
    </label>
  </div>
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
