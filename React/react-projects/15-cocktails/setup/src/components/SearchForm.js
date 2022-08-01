import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext()
  const search = React.useRef('')

  React.useEffect(() => {
    search.current.focus()
  }, [])
  const searchCocktail = () => {
    setSearchValue(search.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail</label>
          <input type='text' id='name' ref={search} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
