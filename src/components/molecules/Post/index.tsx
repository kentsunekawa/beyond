import Link from 'next/link'
import styled from 'styled-components'
import * as styles from './style'
import { PATH } from 'utils/constants'
import { PostOverview } from 'types'

export type Props = {
  post: PostOverview
  className?: string
}

const Structure: React.VFC<Props> = ({ post, className }) => (
  <Link href={`${PATH.post(post.slug)}`}>
    <article className={className}>
      <p className='date'>{post.createdAt.split('T')[0]}</p>
      <h3 className='title'>{post.title}</h3>
      {post.seo && <p>{post.seo.description}</p>}
      <div className='tagList'>
        {post.tags &&
          post.tags.map((tag, i) => (
            <span key={i} className='tag'>
              {tag}
            </span>
          ))}
      </div>
    </article>
  </Link>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
