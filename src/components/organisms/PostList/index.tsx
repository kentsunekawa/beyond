import { PostList } from 'types'
import Post from 'components/molecules/Post'

type Props = {
  postList: PostList
  count: number
}

const Container: React.FC<Props> = ({ postList, count }) => {
  return (
    <div>
      <p>all {count}</p>
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
