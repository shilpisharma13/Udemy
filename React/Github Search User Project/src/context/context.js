import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'
import { useContext } from 'react'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
const useGlobalContext = () => {
  return useContext(GithubContext)
}

//We now have access to Provider and Consumer

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowrs] = useState(mockFollowers)

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data

        setRequests(remaining)
        if (remaining === 0) {
          toggleError(true, 'Sorry, hourly limit exceeded!')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }

  useEffect(checkRequests, [])

  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, requests, error }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, useGlobalContext }
