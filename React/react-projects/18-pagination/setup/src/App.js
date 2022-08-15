import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  const handlePage = (index) => {
    setPage(index)
  }

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers?.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button
              className='prev-btn'
              onClick={() => {
                setPage(page > 0 ? page - 1 : data.length - 1)
              }}
            >
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button
              className='next-btn'
              onClick={() => {
                setPage(page < data.length - 1 ? page + 1 : 0)
              }}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
