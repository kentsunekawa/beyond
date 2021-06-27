import Head from 'next/head'

type Props = {
  title: string
  description: string
  image?: string
  children?: React.ReactNode
}

const Container: React.VFC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {children}
      </Head>
    </>
  )
}

export default Container
