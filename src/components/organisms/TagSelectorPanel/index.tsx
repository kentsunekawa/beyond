import { useCallback } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import * as styles from './style'
import SolidButton from 'components/atoms/SolidButton'
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
    {selectedTags.length > 0 && (
      <SolidButton
        onClick={clear}
        className={classNames('clearButton')}
        disabled={selectedTags.length < 1}
      >
        All clear
      </SolidButton>
    )}
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
    <IconButton onClick={close} iconName='close' className='closeButton' />
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
