const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (request, response) => {
//   response.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (request, response) => {
  response.status(404).send('resource not found')
})

app.listen(2000, () => {
  console.log('server is listening on port 2000...')
})
