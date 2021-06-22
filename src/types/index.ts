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

export type PostOrderByInput = 'createdAt_ASC' | 'createdAt_DESC'

export type PostSearchQuery = {
  keyword: string
  orderBy: PostOrderByInput
  tagList: string[]
  skip: number
  first: number
}
