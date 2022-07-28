import { useState } from 'react'
import axios from 'axios'
const url = 'https://welbi.org/api/start'

const PostRequest = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(url, { email: email })
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Send Request
        </button>
      </form>
    </section>
  )
}
export default PostRequest
