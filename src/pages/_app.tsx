import type { AppProps } from 'next/app'
import { ApolloProvider, useReactiveVar } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { Mode } from 'types'
import { client } from 'client'
import { theme } from 'styles/theme'
import { modeVar } from 'cache'
import GlobalStyle from 'components/GlobalStyle'
import Window from 'components/Window'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mode = useReactiveVar<Mode>(modeVar)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme[mode]}>
        <GlobalStyle />
        <Window>
          <Component {...pageProps} />
        </Window>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
