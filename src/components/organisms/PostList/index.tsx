import { PostList } from 'src/types'
import Post from 'src/components/molecules/Post'

type Props = {
  postList: PostList
}

const Container: React.FC<Props> = ({ postList }) => {
  return (
    <div>
      <ul>
        {postList.length === 0 && <div>No post exists.</div>}
        {postList.length > 0 &&
          postList.map((post, i) => (
            <li key={i}>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Container
