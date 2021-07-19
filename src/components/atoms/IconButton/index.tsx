import styled from 'styled-components'
import * as styles from './style'

import GoogleMaterialIcons from 'components/atoms/icons/GoogleMaterialIcons'

export type Props = {
  onClick: () => void
  iconName: string
  className?: string
}

export const Structure: React.VFC<Props> = ({
  onClick,
  iconName,
  className,
}) => (
  <button className={className} onClick={onClick}>
    <GoogleMaterialIcons className='icon' iconName={iconName} />
  </button>
)

export const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
