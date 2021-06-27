export const SITEDATA = {
  title: 'BEYOND',
  subTitle: 'とあるフロントエンドエンジニアの技術ブログ',
}

export const PATH = {
  top: '/',
  posts: '/posts',
  about: '/about',
  contact: '/contact',
  gallery: '/gallery',
  daily: '/daily',
  post: (slug: string): string => `/posts/${slug}`,
}

export const POSTS_NUM_PER_PAGE = 10
