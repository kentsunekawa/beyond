import React, { useState } from 'react'
import { PostSearchQuery } from 'types'

import TagSelector from 'components/organisms/TagSelector'
import TextInput from 'components/atoms/TextInput'
import SolidButton from 'components/atoms/SolidButton'

export type Props = {
  postSearchQuery: PostSearchQuery
  desideQuery: (query: PostSearchQuery) => void
}

const Container: React.FC<Props> = ({ postSearchQuery, desideQuery }) => {
  const [query, setQuery] = useState<PostSearchQuery>(postSearchQuery)

  const keywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    })
  }

  const toggleTagSelect = (isSelected: boolean, tag: string) => {
    let newTagList: string[] = []
    if (isSelected) {
      newTagList = query.tagList.slice()
      newTagList.push(tag)
    } else {
      newTagList = query.tagList.filter((newTag) => newTag !== tag)
    }
    setQuery({
      ...query,
      tagList: newTagList,
    })
  }

  const clearTagList = () => {
    setQuery({
      ...query,
      tagList: [],
    })
  }

  const search = () => {  
    desideQuery(query)
  }

  return (
    <div>
      <div>
        <TextInput
          type="text"
          placeholder="keyword..."
          text={query.keyword}
          name="keyword"
          onChange={(e) => keywordChange(e)}
        />
      </div>
      <div>
        <TagSelector
          selectedTags={query.tagList}
          toggleTagSelect={toggleTagSelect}
          clearTagList={clearTagList}
        />
      </div>
      <div>
        <SolidButton onClick={search}>Search</SolidButton>
      </div>
    </div>
  )
}

export default Container
