import { useCallback } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import * as styles from './style'
import SolidButton from 'components/atoms/SolidButton'
import TextButton from 'components/atoms/TextButton'
import IconButton from 'components/atoms/IconButton'
import CheckButton from 'components/atoms/CheckButton'

export type ComponentProps = {
  tags: string[]
  selectedTags: string[]
  closePanel: () => void
  toggleTagSelect: (isSelected: boolean, tag: string) => void
  clearTagList: () => void
  className?: string
}

export type Props = ComponentProps & {
  isSelected: (tag: string) => boolean
  clear: () => void
  close: () => void
}

export const Structure: React.VFC<Props> = ({
  selectedTags,
  tags,
  toggleTagSelect,
  isSelected,
  clear,
  close,
  className,
}) => (
  <div
    className={classNames(
      className,
      selectedTags.length > 0 ? '-selected' : '',
    )}
  >
    <button className='overlay' onClick={close}></button>
    <div className='panel'>
      <IconButton onClick={close} iconName='close' className='closeButton' />
      <p className='title'>Tags</p>
      <div className='tagList'>
        {tags.map((tag, i) => {
          return (
            <div key={i} className='tagItem'>
              <CheckButton
                isSelected={isSelected(tag)}
                onSelect={(isSelected) => toggleTagSelect(isSelected, tag)}
              >
                {tag}
              </CheckButton>
            </div>
          )
        })}
      </div>
      {selectedTags.length > 0 && (
        <div className='clearButton'>
          <TextButton onClick={clear}>All clear</TextButton>
        </div>
      )}
      <SolidButton onClick={close} className={classNames('okButton')}>
        OK
      </SolidButton>
    </div>
  </div>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
  const { selectedTags, clearTagList, closePanel } = componentProps

  const clear = () => {
    clearTagList()
  }

  const close = () => {
    closePanel()
  }

  const isSelected = useCallback(
    (tag: string) => {
      for (let i = 0; i < selectedTags.length; i++) {
        if (tag === selectedTags[i]) return true
      }
      return false
    },
    [selectedTags],
  )

  const props = { isSelected, clear, close }

  return <Presenter {...componentProps} {...props} />
}

export default Container
