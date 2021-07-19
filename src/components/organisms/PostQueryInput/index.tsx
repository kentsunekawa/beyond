import React, { useState } from 'react'
import styled from 'styled-components'
import { useReactiveVar } from '@apollo/client'
import * as styles from './style'
import { PostSearchQuery } from 'types'
import { tagListVar } from 'cache'
import TagSelector from 'components/organisms/TagSelector'
import TextInput from 'components/atoms/TextInput'
import SolidButton from 'components/atoms/SolidButton'

export type ComponentProps = {
  postSearchQuery: PostSearchQuery
  desideQuery: (query: PostSearchQuery) => void
  className?: string
}

export type Props = ComponentProps & {
  tags: string[]
  query: PostSearchQuery
  keywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleTagSelect: (isSelected: boolean, tag: string) => void
  clearTagList: () => void
  search: () => void
}

export const Structure: React.VFC<Props> = ({
  tags,
  query,
  keywordChange,
  toggleTagSelect,
  clearTagList,
  search,
  className,
}) => (
  <div className={className}>
    <TextInput
      className='keyword'
      type='text'
      placeholder='keyword...'
      text={query.keyword}
      name='keyword'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => keywordChange(e)}
    />
    <TagSelector
      tags={tags}
      className='tagSelectorButton'
      selectedTags={query.tags}
      toggleTagSelect={toggleTagSelect}
      clearTagList={clearTagList}
    />
    <SolidButton className='SearchButton' onClick={search}>
      Search
    </SolidButton>
  </div>
)

export const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
  const tags = useReactiveVar(tagListVar)
  const { postSearchQuery, desideQuery } = componentProps

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
      newTagList = query.tags.slice()
      newTagList.push(tag)
    } else {
      newTagList = query.tags.filter((newTag) => newTag !== tag)
    }
    setQuery({
      ...query,
      tags: newTagList,
    })
  }

  const clearTagList = () => {
    setQuery({
      ...query,
      tags: [],
    })
  }

  const search = () => {
    desideQuery(query)
  }

  const props = {
    tags,
    query,
    keywordChange,
    toggleTagSelect,
    clearTagList,
    search,
  }

  return <Presenter {...componentProps} {...props} />
}

export default Container
