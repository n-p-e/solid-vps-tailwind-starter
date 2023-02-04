import { hydrate, render as renderToDom } from 'solid-js/web'
import { PageContext } from '../page-context'
import App from './App'

import './index.css'

export const clientRouting = true

export function render(pageContext: PageContext) {
  const root = document.getElementById('app-root') as HTMLDivElement
  hydrate(() => <App pageContext={pageContext} />, root)
}
