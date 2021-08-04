import React, { useState } from 'react'
import styled from 'styled-components'
import * as styles from './style'
import { PostSearchQuery } from 'types'
import TagSelector from 'components/organisms/TagSelector'
import TextInput from 'components/atoms/TextInput'
import SolidButton from 'components/atoms/SolidButton'
import GoogleMaterialIcons from 'components/atoms/icons/GoogleMaterialIcons'

export type ComponentProps = {
  tags: string[]
  postSearchQuery: PostSearchQuery
  desideQuery: (query: PostSearchQuery) => void
  className?: string
}

export type Props = ComponentProps & {
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
      deside={search}
    />
    <SolidButton className='SearchButton' onClick={search}>
      <GoogleMaterialIcons iconName='search' />
    </SolidButton>
  </div>
)

export const Presenter = styled(Structure)`
  ${styles.base}
`

const Container: React.FC<ComponentProps> = (componentProps) => {
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
    query,
    keywordChange,
    toggleTagSelect,
    clearTagList,
    search,
  }

  return <Presenter {...componentProps} {...props} />
}

export default Container
