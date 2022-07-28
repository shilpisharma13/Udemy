import { useEffect } from 'react'
import authFetch from '../axios/custom'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/residents')
      console.log(resp1.data)
      const resp2 = await authFetch('/programs')
      console.log(resp2.data)
    } catch (error) {
      // console.log(resp1.error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
