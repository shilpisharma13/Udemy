import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form
        action='
  div'
        className='form'
        onSubmit={handleSubmit}
      >
        <input type='text' />
        <button type='button'>Submit</button>
      </form>
    </>
  )
}

export default UseRefBasics
