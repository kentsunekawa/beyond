import { useState } from 'react'
import styled from 'styled-components'
import * as styles from './style'
import TagSelectorPanel from 'components/organisms/TagSelectorPanel'
import SolidButton from 'components/atoms/SolidButton'

export type ComponentProps = {
  tags: string[]
  selectedTags: string[]
  toggleTagSelect: (isSelected: boolean, tag: string) => void
  clearTagList: () => void
  deside: () => void
  className?: string
}

export type Props = ComponentProps & {
  isOpen: boolean
  click: () => void
  close: () => void
  mouseEneter: () => void
  mouseLeave: () => void
}

const Structure: React.VFC<Props> = ({
  tags,
  isOpen,
  selectedTags,
  toggleTagSelect,
  clearTagList,
  click,
  close,
  mouseEneter,
  mouseLeave,
  deside,
  className,
}) => (
  <div
    onMouseEnter={mouseEneter}
    onMouseLeave={mouseLeave}
    className={className}
  >
    <SolidButton onClick={click} className='openButton'>
      <>
        {selectedTags.length > 0 && (
          <span className='num'>{selectedTags.length}</span>
        )}
        Tags
      </>
    </SolidButton>
    {isOpen && (
      <TagSelectorPanel
        tags={tags}
        selectedTags={selectedTags}
        closePanel={close}
        toggleTagSelect={(isSelected, tag) => toggleTagSelect(isSelected, tag)}
        clearTagList={clearTagList}
        deside={deside}
      />
    )}
  </div>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const click = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
  }

  const mouseEneter = () => {
    setIsOpen(true)
  }

  const mouseLeave = () => {
    setIsOpen(false)
  }

  const props = { isOpen, click, close, mouseEneter, mouseLeave }

  return <Presenter {...componentProps} {...props} />
}

export default Container
