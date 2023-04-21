function intro(name: string, age: number): string {
  return `Hi, my name is ${name} of age ${age}`
}
//function expression
const intro2 = function (name: string, age: number): string {
  return `Hi, my name is ${name} of age ${age}`
}

//arrow function
const intro3 = (name: string, age: number, country?: string): string => {
  return `Hi, my name is ${name} of age ${age}`
}

enum AgeUnit {
  years = 'years',
  months = 'months',
}

type greetingFunction = (greeting: string) => string

type Person = {
  name: string
  age: number
  ageUnit: AgeUnit
  greet: greetingFunction
}

const person: Person = {
  name: 'Yuvi',
  age: 5.5,
  ageUnit: AgeUnit.years,
  greet: (greeting: string) => {
    return `${greeting}, ${person.name}`
  },
}

function convertYearsToMonths(person: Person): Person {
  const { age, ageUnit } = person
  return { ...person, age: age * 12, ageUnit: AgeUnit.months }
}

console.log(convertYearsToMonths(person))
console.log(person.greet('hello'))
