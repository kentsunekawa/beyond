import styled from 'styled-components'
import * as styles from './style'
import { PostList } from 'types'
import Post from 'components/molecules/Post'

type Props = {
  postList: PostList
  count: number
  className?: string
}

const Structure: React.FC<Props> = ({ postList, count, className }) => {
  return (
    <div className={className}>
      <div className='infoArea'>
        <p className='postNum'>all {count}</p>
      </div>
      <ul className='list'>
        {postList.length === 0 && (
          <div className='message'>No post exists.</div>
        )}
        {postList.length > 0 &&
          postList.map((post, i) => (
            <li key={i} className='item'>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </div>
  )
}

const Presenter = styled(Structure)`
  ${styles.base}
`

export default Presenter
