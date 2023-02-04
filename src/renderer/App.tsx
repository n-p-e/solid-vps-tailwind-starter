import type { Component } from 'solid-js'
import { PageContext } from '../page-context'

const App: Component<{ pageContext: PageContext }> = (props) => {
  // Unlike React, accessing props here prevents Solid's reactivity system
  // from tracking changes. This is fine here as Page wouldn't change after
  // render.
  const { Page, pageProps } = props.pageContext
  return <Page {...pageProps} />
}

export default App
