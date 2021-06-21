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
        <h3>{post.title}</h3>
      </article>
    </Link>
  )
}

export default Container
