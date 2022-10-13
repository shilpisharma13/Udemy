const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (request, response, next) => {
  const authHeader = request.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication failed')
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    request.user = { userID: payload.userID, name: payload.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication failed')
  }
}

module.exports = auth
