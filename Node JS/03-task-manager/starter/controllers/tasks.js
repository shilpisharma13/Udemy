const getAllTasks = (request, response) => {
  response.send('get all tasks from controller')
}

const createTask = (request, response) => {
  response.json(request.body)
}
const getTask = (request, response) => {
  response.json({ id: request.params.id })
}
const updateTask = (request, response) => {
  response.json('update task')
}
const deleteTask = (request, response) => {
  response.json('delete task')
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }
