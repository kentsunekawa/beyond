import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Post } from 'types'
import PostLinkList from 'components/organisms/PostLinkList'

export type Props = {
  post: Post
}

const Container: React.VFC<Props> = ({ post }) => {
  console.log(post)

  return (
    <article>
      <div>
        <h1>{post.title}</h1>
        <div>
          <div>
            <div>
              Published at :{' '}
              {post.date
                ? post.date.split('T')[0]
                : post.createdAt.split('T')[0]}
            </div>
            <div>Updated at : {post.updatedAt.split('T')[0]}</div>
          </div>
          <div>
            {post.tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        </div>
        <p>{post.seo ? post.seo.description : ''}</p>
      </div>
      <div>
        {post.content && (
          <ReactMarkdown plugins={[gfm]}>{post.content}</ReactMarkdown>
        )}
      </div>
      <div>
        <p>Relation Posts</p>
        <div>
          {post.relationPosts && <PostLinkList posts={post.relationPosts} />}
        </div>
      </div>
    </article>
  )
}

export default Container
