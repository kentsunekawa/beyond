import Link from 'next/link'
import GNav from 'components/organisms/GlobalNav'

type Props = {
  logo: boolean
}

const Header: React.FC<Props> = ({ logo }) => {
  return (
    <header>
      {logo && (
        <h1>
          <Link href="/">BEYOND</Link>
        </h1>
      )}
      <div>
        <GNav />
      </div>
    </header>
  )
}

export default Header
