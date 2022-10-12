// IN THIS APPROACH ALL CONNECTIONS FROM REQUESTS ARE HOLD 
// UNTIL THE SERVER PRECESSING IS OVER

import http from 'node:http'

const port = 8080
const host = 'localhost'
const LIMIT_TICKS = 10
const DELAY = 1000
let connections = []

function requestListener(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Transfer-Encoding', 'chunked')
  connections.push(res)
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`listening on ${port}`)
})

let tick = 0

setTimeout(function run() {
  console.log(tick)
  if (++tick > LIMIT_TICKS) {
    connections.map((res, idx) => {
      res.write(`END\n CLIENT ${idx}`)
      res.end()
    })
    connections = []
    tick = 0
  }
  setTimeout(run, DELAY)
}, DELAY)