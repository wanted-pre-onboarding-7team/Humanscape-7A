/* eslint-disable func-names */
import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr',
      changeOrigin: true,
      router: { '/api': 'http://apis.data.go.kr' },
      pathRewrite: { '^/api': '' },
    })
  )
}
