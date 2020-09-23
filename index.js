const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
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
}).listen(8080)
