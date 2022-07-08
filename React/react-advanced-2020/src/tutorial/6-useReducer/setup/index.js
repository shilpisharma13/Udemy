import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return { ...state, people: data, isModalOpen: true, modalContent: 'hello' }
  }
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch({ type: 'ADD_ITEM' })
    } else {
    }
  }
  return (
    <>
      {defaultState.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      {defaultState.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
