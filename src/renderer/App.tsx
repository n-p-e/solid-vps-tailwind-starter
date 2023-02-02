import type { Component } from 'solid-js'
import { PageContext } from '../page-context'

const App: Component<{ pageContext: PageContext }> = ({ pageContext }) => {
  const { Page, pageProps } = pageContext
  return <Page {...pageProps} />
}

export default App
