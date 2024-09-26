import { Component } from 'solid-js'
import { HydrationScript, renderToStream } from 'solid-js/web'
import { escapeInject, stampPipe } from 'vite-plugin-ssr/server'
import { PageContext } from '../page-context'
import App from './App'

import './index.css'

export const passToClient = ['pageProps']

interface DocumentProps {
  title: string
  description: string
  pageContext: PageContext
}

const Document: Component<DocumentProps> = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
        <HydrationScript />
      </head>
      <body>
        <div id="app-root">
          <App pageContext={props.pageContext} />
        </div>
      </body>
    </html>
  )
}

export function render(pageContext: PageContext) {
  let { title, description } = pageContext.exports
  title = typeof title === 'string' ? title : title?.() ?? 'Untitled'
  description =
    typeof description === 'string' ? description : description?.() ?? ''

  const { pipe } = renderToStream(() => (
    <Document
      title={title as string}
      description={description as string}
      pageContext={pageContext}
    />
  ))
  stampPipe(pipe, 'node-stream')
  return escapeInject`<!DOCTYPE html>
    ${pipe}
  `
}
