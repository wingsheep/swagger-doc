/* eslint-disable no-console */
import http from 'http'
import exampleJson from './mock/example.json'
import v2Json from './mock/v2.json'
import v3Json from './mock/v3.json'
http.createServer((request, response) => {
  if (request.url === '/v2/example') {
    response.setHeader('Content-Type', 'application/json')
    response.writeHead(200)
    response.end(JSON.stringify(exampleJson, null, 3))
  }
  else if (request.url === '/v2/doc') {
    response.setHeader('Content-Type', 'application/json')
    response.writeHead(200)
    response.end(JSON.stringify(v2Json, null, 3))
  }
  else if (request.url === '/v3/doc') {
    response.setHeader('Content-Type', 'application/json')
    response.writeHead(200)
    response.end(JSON.stringify(v3Json, null, 3))
  }
}).listen(3000)

console.log('服务启动: 127.0.0.1:3000')
