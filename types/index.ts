export type Post = {
  slug: string
  title: string
  content: {
    html?: string
    text?: string
    markdown?: string
  }
}

export type Posts = Post[]
