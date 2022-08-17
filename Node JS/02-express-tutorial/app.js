const express = require('express')
const app = express()
const logger = require('./logger')
const authorise = require('./authorise')

app.use([logger, authorise])

app.get('/', (request, response) => {
  response.send(`<h1> home page </h1>`)
})

app.get('/about', (request, response) => {
  response.send(`<h1> About page </h1>`)
})

app.get('/api/products', (request, response) => {
  response.send(`<h1> products page </h1>`)
})

app.get('/api/items', (request, response) => {
  response.send(`<h1> items page </h1>`)
})

app.listen(2000, () => {
  console.log('server is listening on port 2000...')
})
