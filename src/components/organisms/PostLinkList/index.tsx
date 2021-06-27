import Link from 'next/link'

import { PostMin } from 'types'

export interface Props {
  posts: PostMin[]
}

const Container: React.VFC<Props> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Container
