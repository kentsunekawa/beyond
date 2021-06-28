import { useReactiveVar } from '@apollo/client'
import { modeVar } from 'cache'

import { Mode } from 'types'

const Container: React.FC = () => {
  const mode = useReactiveVar<Mode>(modeVar)

  const modeChange = () => {
    modeVar(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mode === 'dark'}
          onChange={modeChange}
        />
        mode changer
      </label>
    </div>
  )
}

export default Container
