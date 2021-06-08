import { GetStaticPaths, GetStaticProps } from 'next'

import { Post as PostType } from 'types'

type Props = {
    post: PostType
}

const Post = ({ post }: Props): JSX.Element => (
    <div>
        <h1>{post.title}</h1>
        {/* <div>{post.content}</div> */}
    </div>
)

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = ['/posts/1', '/posts/2', '/posts/3']

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        post: {
            title: 'タイトル',
            // content: 'コンテンツ',
        },
    },
})
