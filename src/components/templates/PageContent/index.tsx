import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import classNames from 'classnames'
import gfm from 'remark-gfm'
import 'github-markdown-css'
import * as styles from './style'
import { Page } from 'types'
import PageTitle from 'components/atoms/PageTitle'

const COMPONENT_NAME = 'PostContent'

export type Props = {
  page: Page
  className?: string
}

const PostContent: React.VFC<Props> = ({ page, className }) => (
  <article className={classNames(className, COMPONENT_NAME)}>
    <div className='header'>
      <PageTitle className='mainTitle'>{page.title}</PageTitle>
    </div>
    {page.content && (
      <ReactMarkdown className='markdown-body' plugins={[gfm]}>
        {page.content.markdown}
      </ReactMarkdown>
    )}
  </article>
)

const Presenter = styled(PostContent)`
  ${styles.base}
`

export default Presenter
