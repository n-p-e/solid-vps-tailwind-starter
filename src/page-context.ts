import { PageContextBuiltIn } from 'vite-plugin-ssr'

export interface PageContext extends PageContextBuiltIn {
  pageProps: {}
  exports: {
    title?: string | (() => string)
    description?: string | (() => string)
  }
}
