const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message)
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  }

  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ')
    customError.statusCode = 400
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Account already exist for ${Object.values(
      err.keyValue
    )}. Please try logging in`
    customError.statusCode = 400
  }

  if (err.name === 'CastError') {
    customError.msg = `Invalid job id ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }

  return res.status(customError.statusCode).json({ msg: customError.msg })
  // return res.status(StatusCodes.BAD_REQUEST).json({ err })
}

module.exports = errorHandlerMiddleware
