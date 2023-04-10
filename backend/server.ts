/* eslint-disable no-console */
import http from 'http'
import swaggerJson from './mock/swagger.json'
http.createServer((request, response) => {
  if (request.url === '/v2/example') {
    response.setHeader('Content-Type', 'application/json')
    response.writeHead(200)
    response.end(JSON.stringify(swaggerJson, null, 3))
  }
}).listen(3000)

console.log('服务启动: 127.0.0.1:3000')
