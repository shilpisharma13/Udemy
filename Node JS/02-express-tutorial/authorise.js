const authorise = (request, response, next) => {
  const { user } = request.query

  if (user === 'shilpi') {
    request.user = { name: 'shilpi', id: 4 }
    next()
  } else {
    response.status(401).send('Unauthorised')
  }
}
module.exports = authorise
