import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h2>Oop's it's a dead end!</h2>
        <Link to='/' className='btn-primary'>
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default Error
