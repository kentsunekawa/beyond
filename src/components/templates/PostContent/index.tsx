import { Post } from 'src/types'

export type Props = {
  post: Post
}

const Container: React.FC<Props> = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content.markdown}</div>
    </article>
  )
}

export default Container
