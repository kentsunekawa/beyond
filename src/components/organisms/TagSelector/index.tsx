import { useState } from 'react'

import { TagList, Tag } from 'types'
import TagSelectorPanel from 'components/organisms/TagSelectorPanel'

export type Props = {
  selectedTags: TagList
  toggleTagSelect: (isSelected: boolean, tag: Tag) => void
  clearTagList: () => void
}

const tagList = [
  {
    slug: 'test',
    label: 'Test',
  },
  {
    slug: 'javascript',
    label: 'JavaScript',
  },
  {
    slug: 'react',
    label: 'React',
  },
  {
    slug: 'typescript',
    label: 'TypeScript',
  },
]

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
            tagList={tagList}
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
