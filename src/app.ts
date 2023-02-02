import { renderPage } from 'vite-plugin-ssr'
import express from 'express'

const app = express()

app.use(express.static('dist/client'))

app.get('*', async (req, res, next) => {
  const { httpResponse } = await renderPage({ urlOriginal: req.url })
  if (!httpResponse) {
    return next()
  }
  const { pipe, statusCode, contentType, earlyHints } = httpResponse
  res.status(statusCode).type(contentType)
  pipe(res)
})

app.listen(3000)
console.log('Started on port 3000')
