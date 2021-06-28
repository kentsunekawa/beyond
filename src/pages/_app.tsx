import type { AppProps } from 'next/app'
import { ApolloProvider, useReactiveVar } from '@apollo/client'
import { ThemeProvider, Global } from '@emotion/react'
import { Mode } from 'types'
import { globalStyle } from 'styles'
import { client } from 'client'
import { theme } from 'styles/theme'
import { modeVar } from 'cache'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mode = useReactiveVar<Mode>(modeVar)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme[mode]}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
