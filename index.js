const fs = require('fs')
const http = require('http')

const PORT = 8080

const server = http.createServer((request, response) => {
  const body = []

  request.on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    const filename = `requests/${Date.now()}.json`
    const content = Buffer.concat(body).toString()

    fs.writeFileSync(filename, content)
    console.info(`Wrote ${filename}!`)
  })

  response.writeHead(201)
  response.end()
})

server.listen(PORT)
console.info(`Listening on 127.0.0.1:${PORT}`)
