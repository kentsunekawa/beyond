import { useState } from 'react'

import TagSelectorPanel from 'components/organisms/TagSelectorPanel'

export type Props = {
  selectedTags: string[]
  toggleTagSelect: (isSelected: boolean, tag: string) => void
  clearTagList: () => void
}

const tags = ['TypeScript', 'Test', 'JavaScript', 'React', 'SEO']

const TagSelector: React.FC<Props> = ({
  selectedTags,
  toggleTagSelect,
  clearTagList,
}) => {
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

  return (
    <div onMouseEnter={mouseEneter} onMouseLeave={mouseLeave}>
      <button onClick={click}>
        {selectedTags.length > 0 && <span>{selectedTags.length}</span>}
        タグ
      </button>
      {isOpen && (
        <div>
          <TagSelectorPanel
            tags={tags}
            selectedTags={selectedTags}
            closePanel={close}
            toggleTagSelect={(isSelected, tag) =>
              toggleTagSelect(isSelected, tag)
            }
            clearTagList={clearTagList}
          />
        </div>
      )}
    </div>
  )
}

export default TagSelector
