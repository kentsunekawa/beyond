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
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Round'
          rel='stylesheet'
        />
        {children}
      </Head>
    </>
  )
}

export default Container
