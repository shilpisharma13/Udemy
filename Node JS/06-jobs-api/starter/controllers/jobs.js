const getAllJobs = async (request, response) => {
  response.send('get All jobs')
}

const getJob = async (request, response) => {
  response.send('get job')
}

const createJob = async (request, response) => {
  response.send('job created')
}

const updateJob = async (request, response) => {
  response.send('job updated')
}

const deleteJob = async (request, response) => {
  response.send('job deleted')
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
