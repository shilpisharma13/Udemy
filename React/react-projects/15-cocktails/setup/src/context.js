import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${searchValue}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [searchValue])

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }