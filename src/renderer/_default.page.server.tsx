import { generateHydrationScript, renderToStream } from 'solid-js/web'
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr'
import { PageContext } from '../page-context'
import App from './App'

import './index.css'

export const passToClient = ['pageProps']

export function render(pageContext: PageContext) {
  const { pipe } = renderToStream(() => <App pageContext={pageContext} />)
  let { title, description } = pageContext.exports
  title =
    typeof title === 'string' ? title : title?.call(undefined) ?? 'Untitled'
  description =
    typeof description === 'string'
      ? description
      : description?.call(undefined) ?? ''
  stampPipe(pipe, 'node-stream')

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${description}" />
      <title>${title}</title>
      ${dangerouslySkipEscape(generateHydrationScript())}
    </head>
    <body>
      <div id="app-root">${pipe}</div>
    </body>
    </html>
  `
}
