const { StatusCodes } = require('http-status-codes')
const Job = require('../models/Job')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (request, response) => {
  const jobs = await Job.find({ createdBy: request.user.userID }).sort(
    'createdAt'
  )
  response.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getJob = async (request, response) => {
  const {
    user: { userID },
    params: { id: jobID },
  } = request
  const job = await Job.findOne({ _id: jobID, createdBy: userID })
  if (!job) {
    throw new NotFoundError(`No job with id ${jobID}`)
  }
  response.status(StatusCodes.OK).json({ job })
}

const createJob = async (request, response) => {
  request.body.createdBy = request.user.userID
  const job = await Job.create(request.body)
  response.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (request, response) => {
  const {
    body: { company, position },
    user: { userID },
    params: { id: jobID },
  } = request

  if (company === '' || position === '') {
    throw new BadRequestError('Search values cannot be empty')
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobID, createdBy: userID },
    request.body,
    { new: true, runValidators: true }
  )
  if (!job) {
    throw new NotFoundError(`No job with id ${jobID}`)
  }
  response.status(StatusCodes.OK).json({ job })
}
const deleteJob = async (request, response) => {
  const {
    user: { userID },
    params: { id: jobID },
  } = request

  const job = await Job.findByIdAndDelete({ _id: jobID, createdBy: userID })
  if (!job) {
    throw new NotFoundError(`No job with id ${jobID}`)
  }
  response.status(StatusCodes.OK).send({ job })
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
