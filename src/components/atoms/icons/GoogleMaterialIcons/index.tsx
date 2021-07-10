import styled from 'styled-components'

export type Props = {
  iconName: string
}

const Structure: React.VFC<Props> = ({ iconName }) => (
  <span className='material-icons'>{iconName}</span>
)

const Presenter = styled(Structure)`
  font-size: inherit;
  color: inherit;
  line-height: 1em;
`

export default Presenter
