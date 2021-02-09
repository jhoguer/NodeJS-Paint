const http = require('http')

const server = http.createServer(onRequest)

const port = 3000
server.listen(port, () => {
  console.log('Mi servidor esta corriendo en localhost:3000')
})

function onRequest(req, res) {
  console.log('Se ha detectado una nueva peticion')
  console.log(req.headers.host)
  console.log(req.url)
  console.log(req.method)
  res.setHeader('Content-type', 'text/plain')
  res.write('Bienvenidos al curso de NodeJs')
  res.end()
}