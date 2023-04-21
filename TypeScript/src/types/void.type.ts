//void - function that never return anything

const addNum = () => {
  console.log(2 + 4)
}

addNum() // this function doesnt return anything

//never- a function that never completes
const throwError = () => {
  throw new Error('Error!!!')
}

throwError()
