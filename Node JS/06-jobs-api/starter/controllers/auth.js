const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (request, response) => {
  const user = await User.create({ ...request.body })
  const token = user.createJWT()
  response
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, token })
}

const login = async (request, response) => {
  response.send('login user')
}

module.exports = { register, login }
