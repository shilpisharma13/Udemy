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

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, useGlobalContext }
