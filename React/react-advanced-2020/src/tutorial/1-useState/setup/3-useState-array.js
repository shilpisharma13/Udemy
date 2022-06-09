import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState([data])
  console.log(people, setPeople)
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        )
      })}
      <button className="btn" onClick={}></button>
    </>
  )
}

export default UseStateArray
