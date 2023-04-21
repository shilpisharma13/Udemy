type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[]
}

const filter: Filter = (array, predicate) => {
  const result = []
  // array.forEach((element) => {
  //   if (predicate(element)) result.push(element)
  // })
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (predicate(item)) {
      result.push(item)
    }
  }
  return result
}

function filterNum(num: number): boolean {
  return num > 7
}
console.log(filter([1, 2, 3, 43, 8, 9], filterNum))

const pets = ['cat', 'dog', 'hamster']

function filterCat(item: string) {
  return item === 'cat'
}

console.log(filter(pets, filterCat))

//map functionality
const map = <T, U>(array: T[], func: (item: T) => U) => {
  if (array.length) return array
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i])
  }
  return result
}

const numbers = [1, 2, 3, 4, 5]

const converted = map(numbers, (num) => num.toString())
