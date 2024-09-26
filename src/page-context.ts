import type { PageContextBuiltInServer } from 'vite-plugin-ssr/types'

export interface PageContext extends PageContextBuiltInServer {
  pageProps: {}
  exports: {
    title?: string | (() => string)
    description?: string | (() => string)
  }
}
