export type Tag = {
  slug: string
  label: string
}

export type TagList = Tag[]

export type PostOverview = {
  slug: string
  title: string
  tagList: string[]
}

export type Post = {
  slug: string
  title: string
  content: {
    html?: string
    text?: string
    markdown?: string
  }
}

export type PostList = PostOverview[]
export type Posts = Post[]

export type PostSearchQuery = {
  keyword: string
  sort: 'asc' | 'desc'
  tagList: TagList
  offset: number
  limit: number
}
