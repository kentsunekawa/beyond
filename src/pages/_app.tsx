import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const cache = new InMemoryCache()
const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_END_POINT}`,
    cache,
})

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
)

export default App
