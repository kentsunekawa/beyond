import { useCallback } from 'react'

import TextButton from 'components/atoms/TextButton'
import CheckButton from 'components/atoms/CheckButton'

export type Props = {
  tagList: string[]
  selectedTags: string[]
  closePanel: () => void
  toggleTagSelect: (isSelected: boolean, tag: string) => void
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

  const isSelected = useCallback(
    (tag: string) => {
      for (let i = 0; i < selectedTags.length; i++) {
        if (tag === selectedTags[i]) return true
      }
      return false
    },
    [selectedTags],
  )

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
                {tag}
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
