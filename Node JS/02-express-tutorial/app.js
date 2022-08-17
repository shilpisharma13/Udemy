const { response } = require('express')
const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (request, response) => {
  response.status(404).json({ success: true, data: people })
})

app.post('/login', (request, response) => {
  const { name } = request.body
  if (name) {
    return response.status(200).send(`Welcome, ${name}`)
  }
  response.status(404).send('Please provide credentials')
})

app.listen(2000, () => {
  console.log('server is listening on port 2000...')
})
