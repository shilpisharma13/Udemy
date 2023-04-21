let Iperson = {
  name: 'Shil',
  age: 23,
}

let car: { colour: string; brand: string } = {
  colour: 'Red',
  brand: 'BMW',
}

let article: {
  author: string
  content: string
  title: string
  image?: string // ? suggests that this property is optional
}
type Blog = {
  author: string
  content: string
  title: string
  image?: string // ? suggests that this property is optional
}

let blog: Blog = {
  author: 'Shil',
  content: ' My Blog',
  title: 'Thisi s a blog',
}

type Caterer = {
  name: string
  address: string
  phone: number
}

type Airplane = {
  model: string
  flightNumber: string
  timeOfDeparture: Date
  timeOfArrival: Date
  caterer: Caterer
}
