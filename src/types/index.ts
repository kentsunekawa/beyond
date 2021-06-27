export type PageInfo = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
  pageSize: number
}

export type Seo = {
  description: string
  title: string
}

export type PostMin = {
  title: string
  slug: string
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
  createdAt: string
  updatedAt: string
  slug: string
  title: string
  content: string
  date: string
  coverImg: {
    url: string
  }
  tags: string[]
  seo: {
    description: string
    title: string
    image: {
      url: string
    }
  } | null
  relationPosts: {
    title: string
    slug: string
  }[]
}

export type PostList = PostOverview[]

export type Posts = Post[]

export type PostOrderByInput = 'createdAt_ASC' | 'createdAt_DESC'

export type PostSearchQuery = {
  keyword: string
  orderBy: PostOrderByInput
  tags: string[]
  skip: number | null
  page: number
  first: number | null
  last: number | null
  after: string | null
  before: string | null
}
