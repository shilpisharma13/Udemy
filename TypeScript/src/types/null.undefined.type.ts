let loggedInUsername: string

const users = [{ name: 'shubh', age: 30 }, { name: 'yuvi' }]

let loggedInUser = users.find((user) => user.name === loggedInUsername)

console.log(loggedInUser.age)

let saveButton: HTMLElement = document.getElementById('save')! // ! mark will tell typescript that eventually there will be a value or declare union of null
