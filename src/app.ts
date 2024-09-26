import { renderPage } from 'vite-plugin-ssr/server'
import express from 'express'

const app = express()

app.use(express.static('dist/client'))

app.get('*', async (req, res, next) => {
  const { httpResponse } = await renderPage({ urlOriginal: req.url })
  if (!httpResponse) {
    return next()
  }
  const { statusCode, contentType } = httpResponse
  res.status(statusCode).type(contentType)
  httpResponse.pipe(res)
})

app.listen(3000)
console.log('Started on port 3000')
