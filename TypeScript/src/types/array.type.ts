let arrayNum = [1, 2, 3]

let bString = ['a', 'b']

let arraynew = ['v', 1]

let cString: Array<string> = ['c']
let dNum: number[] = [4, 5, 6]

let mixedOneArray: (string | number)[] = [1, 23, 'hello', 'world']
let mixedArray: Array<string | number> = [1, 23, 'hello', 'world']

type AirplanesNew = {
  flightNumber: string
  dateOfDeparture: string
  seats: {
    [key: string]: string
  }
}

type AirplanesArray = AirplanesNew[]

let listofAirlines: AirplanesArray

//tuples - array with fixed length with given types

let personArr: [string, string, number?] // ? for optional properties

personArr = ['shil', 'sharma']

type ListOfStudents = [number, boolean, ...string[]]

const students = [3, false, 'shil', 'shubh', 'yuvi'] // this is a tuple

//read-only arrays

let number: readonly number[] = [1, 2, 3]

type ReadOnlyPerson = readonly [string, number]

const newPerson: ReadOnlyPerson = ['Yudhi', 3]

type a = Readonly<string[]>
type b = Readonly<[string, string, number]>
