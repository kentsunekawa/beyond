export type PageInfo = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCursor: string
  pageSize: number
}

export type Seo = {
  description: string
  title: string
}

export type PostOverview = {
  createdAt: string
  updatedAt: string
  slug: string
  title: string
  tags: string[]
  seo: null | Seo
}

export type Post = {
  slug: string
  title: string
  content: string
}

export type PostList = PostOverview[]

export type Posts = Post[]

export type PostOrderByInput = 'createdAt_ASC' | 'createdAt_DESC'

export type PostSearchQuery = {
  keyword: string
  orderBy: PostOrderByInput
  tags: string[]
  skip: number
  page: number
  first: number
}
