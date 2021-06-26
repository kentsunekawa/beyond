import Link from 'next/link'
import { PATH } from 'utils/constants'
import { PostOverview } from 'types'

export type Props = {
  post: PostOverview
}

const Container: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`${PATH.post(post.slug)}`}>
      <article>
        <p>{post.createdAt.split('T')[0]}</p>
        <h3>{post.title}</h3>
        {post.seo && <p>{post.seo.description}</p>}
        <ul>
          {post.tags && post.tags.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
      </article>
    </Link>
  )
}

export default Container
