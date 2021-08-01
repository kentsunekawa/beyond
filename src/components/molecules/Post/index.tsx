import Link from 'next/link'
import styled from 'styled-components'
import * as styles from './style'
import { PATH } from 'utils/constants'
import { PostOverview } from 'types'
import TagList from 'components/molecules/TagList'

export type Props = {
  post: PostOverview
  className?: string
}

const Structure: React.VFC<Props> = ({ post, className }) => (
  <Link href={`${PATH.post(post.slug)}`}>
    <article className={className}>
      <p className='date'>{post.date.split('T')[0]}</p>
      <h3 className='title'>{post.title}</h3>
      {/* {post.seo && <p className='description'>{post.seo.description}</p>} */}
      <TagList tags={post.tags} />
    </article>
  </Link>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
