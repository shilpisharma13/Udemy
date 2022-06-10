import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const getTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(true)
      console.error(error)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours left</h2>
          <button className='btn' onClick={getTours}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return <Tours tours={tours} removeTour={removeTour} />
}

export default App
