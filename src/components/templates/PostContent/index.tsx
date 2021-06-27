import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Post } from 'types'

export type Props = {
  post: Post
}

const Container: React.VFC<Props> = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>
        {post.content && (
          <ReactMarkdown plugins={[gfm]}>{post.content}</ReactMarkdown>
        )}
      </div>
    </article>
  )
}

export default Container
