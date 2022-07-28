import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'https://welbi.org/api',
  headers: {
    Authorization: 'Bearer 093af7ee-fb1d-40e9-ab4d-55db2571f8ab',
  },
})

export default authFetch
