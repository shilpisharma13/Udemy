//Union types

type Dog = {
  name: string
  barks: boolean
  likes: string
}
type Cat = {
  name: string
  meows: boolean
}

type DogCat = Dog | Cat // union types
type DognCat = Dog & Cat // intersection types - will have all common and unique properties i.e.3 properties

const dog: DogCat = {
  //should have at least all fields of one object for union types
  //intersection types should have all unique plus common properties
  name: 'Trevor',
  barks: true,
  likes: 'bones',
}

type stringOrNumber = number | string

function sum2(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return a.toString() + b.toString()
}

// console.log(sum2('Mark', null)) // throws error

let sum3 = (a: stringOrNumber, b: stringOrNumber) => {
  return a + b
}

//index signature

type Airplanes = {
  flightNumber: string
  dateOfDeparture: string
  seats: {
    [key: string]: string
  }
}
enum Types {
  national = 'national',
  academic = 'academic',
  public = 'public',
}

type TypeOfLib = 'national' | 'academic' | 'public'

type Book = {
  title: string
  pages: number
  isbn: string
}

type Member = {
  name: string
  phone: string
  [key: string]: string
}

type Library = {
  name: string
  address: string
  numberOfBooks: number
  type: Types
  books: Book[]
  genres: string[]
  members: Member[]
}
