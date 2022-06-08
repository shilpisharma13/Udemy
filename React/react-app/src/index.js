import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

//stateless functional component
//always return JSX

//writing HTML just using JS
// const Greeting = () => React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'))

//its better to use JSX instead of using multiple nested create elements. Below code is more readable than using JS and not JSX
// function should be always have first letter in uppercase. Greeting is a component

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Where is the GREEN Sheepppp?'
  return (
    <article className='book'>
      <Image />
      <h1>{title}</h1>
      <Author />
    </article>
  )
}
const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/61PvPVtGLrL._SX482_BO1,204,203,200_.jpg'
      alt='greenSheep'
    />
  )
}

// const Title = () => <h1>Where is the Green Sheep?</h1>

const Author = () => <h4>By: Mem Fox</h4>

// ReactDom.render(<Greeting />, document.getElementById('root')) // Old way to do it
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
