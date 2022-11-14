import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true)
  const [randomUser, setRandomUser] = useState([])
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('default value')

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      const user = data.results[0]
      const { phone, email } = user
      const { large: image } = user.picture
      const {
        login: { password },
      } = user
      const {
        name: { first, last },
      } = user
      const {
        dob: { age },
      } = user
      const {
        street: { number, name },
      } = user.location
      const newUser = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number}, ${name}`,
        name: `${first} ${last}`,
      }
      setRandomUser(newUser)
      setLoading(false)
      setTitle('name')
      setValue(randomUser.name)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [url])

  const handleValue = (e) => {
    const data = e.target.dataset?.label
    if (data) {
      setTitle(data)
      setValue(randomUser[data])
    }
  }

  return (
    <main>
      <div className='block bdg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(randomUser && randomUser.image) || defaultImage}
            alt={randomUser.name}
            className='user-img'
          />
          <p className='user-title'>My {title} is:</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>

          <button className='btn' onClick={() => fetchUser()}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
