import React, { useState } from 'react'
import { PostSearchQuery } from 'src/types'

import TextInput from 'src/components/atoms/TextInput'
import SolidButton from 'src/components/atoms/SolidButton'

export type Props = {
  postSearchQuery: PostSearchQuery
  desideQuery: (query: PostSearchQuery) => void
}

const Container: React.FC<Props> = ({ postSearchQuery, desideQuery }) => {
  const [query, setQuery] = useState<PostSearchQuery>(postSearchQuery)

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
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
          value={query.keyword}
          name="keyword"
          onChange={(e) => queryChange(e)}
        />
      </div>
      <div>
        <SolidButton onClick={search}>Search</SolidButton>
      </div>
    </div>
  )
}

export default Container
