import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Hey, Peter',
  })
  console.log(person)
  const changeMessage = () => setPerson({ ...person, message: 'Hello World' })
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
