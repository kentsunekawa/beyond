import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from 'client'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
