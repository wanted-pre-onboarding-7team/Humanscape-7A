/* eslint-disable func-names */
import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://apis.data.go.kr',
      changeOrigin: true,
      router: { '/api': 'https://apis.data.go.kr' },
      pathRewrite: { '^/api': '' },
    })
  )
}
