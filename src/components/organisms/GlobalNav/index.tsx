import Link from 'next/link'
import ModeChanger from 'components/atoms/ModeChanger'
import { PATH } from 'utils/constants'

const GlobalNav: React.FC = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href={PATH.top}>
              <button>TOP</button>
            </Link>
          </li>
          <li>
            <Link href={PATH.posts}>
              <button>POSTS</button>
            </Link>
          </li>
          {/* <li>
            <Link href={PATH.daily}>
              <button>DAILY</button>
            </Link>
          </li> */}
          {/* <li>
            <Link href={PATH.gallery}>
              <button>GALLERY</button>
            </Link>
          </li> */}
          <li>
            <Link href={PATH.about}>
              <button>ABOUT</button>
            </Link>
          </li>
          {/* <li>
            <Link href={PATH.contact}>
              <button>CONTACT</button>
            </Link>
          </li> */}
        </ul>
      </div>
      <div>
        <ModeChanger />
      </div>
    </div>
  )
}

export default GlobalNav
