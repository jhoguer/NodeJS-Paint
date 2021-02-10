const http = require('http')
const fs = require('fs')
const qs = require('querystring')

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
  // res.setHeader('Content-type', 'text/html')
  // res.write('<h1>Bienvenidos al curso de NodeJs</h1>')
  // res.write('<h2>Pagina de Prueba</h2>')
  // res.end()

  if (req.url == '/') {
    fs.readFile('index.html', (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.setStatus = 404
          console.log('No se ha encontrado el archivo')
        } else {
          res.setStatus = 500
          console.log('Ha ocurrido un error en el servidor')
        }
      } else {
        setStatus = 202
        res.setHeader('Content-type', 'text/html')
        res.write(content)
        res.end()
      }
    })
  } else if (req.url == '/users') {
    if (req.method == 'GET') {
      setStatus = 200
      res.setHeader('Content-type', 'text/html')
      res.write('Accediento a usuarios')
      res.end()
      
    } else if (req.method == 'POST') {
      let datos = ''
      req.on('data', (d) => {
        datos += d
      })

      req.on('end', () => {
        let post = qs.parse(datos)
        res.end('Datos recibidos: ' + post.nombre)
      })

    } else if (req.method == 'PUT') {
      let datos = ''
      req.on('data', (d) => {
        datos += d
      })

      req.on('end', () => {
        let post = qs.parse(datos)
        res.end('Datos recibidos: ' + post.nombre)
      })

    } else if (req.method == 'DELETE') {
      let datos = ''
      req.on('data', (d) => {
        datos += d
      })

      req.on('end', () => {
        let post = qs.parse(datos)
        res.end('Datos recibidos: ' + post.nombre)
      })

    }
  }

  
}