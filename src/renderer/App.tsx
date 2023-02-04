import type { Component } from 'solid-js'
import { PageContext } from '../page-context'

const App: Component<{ pageContext: PageContext }> = (props) => {
  const { Page, pageProps } = props.pageContext
  return <Page {...pageProps} />
}

export default App
