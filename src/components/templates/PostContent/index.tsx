import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import classNames from 'classnames'
import gfm from 'remark-gfm'
import 'github-markdown-css'
import * as styles from './style'
import { Post } from 'types'
import PostLinkList from 'components/organisms/PostLinkList'
import PostTitle from 'components/atoms/PostTitle'

export type Props = {
  post: Post
  className?: string
}

const Structure: React.VFC<Props> = ({ post, className }) => (
  <article className={classNames(className)}>
    <div className='header'>
      <PostTitle className='mainTitle'>{post.title}</PostTitle>
      <div className='dateArea'>
        <div className='date -published'>
          Published at :{' '}
          {post.date ? post.date.split('T')[0] : post.createdAt.split('T')[0]}
        </div>
        <div className='date -updatedat'>
          Updated at : {post.updatedAt.split('T')[0]}
        </div>
      </div>
      <div className='tags'>
        {post.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
      <p className='insert'>{post.seo ? post.seo.description : ''}</p>
    </div>
    {post.content && (
      <ReactMarkdown className='markdown-body' plugins={[gfm]}>
        {post.content}
      </ReactMarkdown>
    )}
    {post.relationPosts.length > 0 && (
      <PostLinkList listTitle='Related Posts' posts={post.relationPosts} />
    )}
  </article>
)

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
