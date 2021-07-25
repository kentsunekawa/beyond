import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'
import * as styles from './styles'
import { PostMin } from 'types'

import SectionTitle from 'components/atoms/SectionTitle'

export interface Props {
  posts: PostMin[]
  listTitle?: string
  className?: string
}

const Structure: React.VFC<Props> = ({ posts, listTitle, className }) => {
  return (
    <div className={classNames(className)}>
      <SectionTitle className='title'>{listTitle}</SectionTitle>
      <div className='links'>
        {posts.map((post, i) => (
          <Link key={i} href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
