import { TagList, Tag } from 'src/types'

import TextButton from 'src/components/atoms/TextButton'
import CheckButton from 'src/components/atoms/CheckButton'

export type Props = {
  tagList: TagList
  selectedTags: TagList
  closePanel: () => void
  toggleTagSelect: (isSelected: boolean, tag: Tag) => void
  clearTagList: () => void
}

const Container: React.FC<Props> = ({
  tagList,
  selectedTags,
  closePanel,
  toggleTagSelect,
  clearTagList,
}) => {
  const clear = () => {
    clearTagList()
  }

  const close = () => {
    closePanel()
  }

  const isSelected = (tag: Tag) => {
    for (let i = 0; i < selectedTags.length; i++) {
      if (tag.slug === selectedTags[i].slug) return true
    }
    return false
  }

  return (
    <div>
      <div>
        <TextButton onClick={clear}>全てクリア</TextButton>
      </div>
      <div>
        {tagList.map((tag, i) => {
          return (
            <div key={i}>
              <CheckButton
                isSelected={isSelected(tag)}
                onSelect={(isSelected) => toggleTagSelect(isSelected, tag)}
              >
                {tag.label}
              </CheckButton>
            </div>
          )
        })}
      </div>
      <div>
        <TextButton onClick={close}>閉じる</TextButton>
      </div>
    </div>
  )
}

export default Container
