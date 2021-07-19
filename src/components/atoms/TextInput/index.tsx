import styled from 'styled-components'
import * as styles from './style'

export type Props = {
  text: string
  type: 'text' | 'password'
  name?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Structure: React.FC<Props> = ({
  text,
  type,
  name,
  placeholder,
  onChange,
  className,
}) => (
  <div className={className}>
    <input
      value={text}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
