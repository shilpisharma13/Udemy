import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

//stateless functional component
//always return JSX

//writing HTML just using JS
// const Greeting = () => React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'))

//its better to use JSX instead of using multiple nested create elements. Below code is more readable than using JS and not JSX
// function should be always have first letter in uppercase. Greeting is a component

const books = [
  {
    id: 1,
    title: "The Gruffalo's Child",
    author: 'Julia Donaldson',
    img: 'https://images-na.ssl-images-amazon.com/images/I/517JtD-ak+L._SX397_BO1,204,203,200_.jpg',
    alt: 'The Gruffalos Child',
  },
  {
    id: 2,
    title: 'Where is the GREEN Sheep?',
    author: 'Mem Fox',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61PvPVtGLrL._SX482_BO1,204,203,200_.jpg',
    alt: 'Where is the GREEN Sheep?',
  },
  {
    id: 3,
    title: 'PIG the PUG',
    author: 'Aaron Blabey',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61E31TKCVFL._SX258_BO1,204,203,200_QL70_ML2_.jpg',
    alt: 'PIG the PUG',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, alt } = book
        return <Book key={book.id} book={book}></Book>
      })}
      {/* <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} alt={firstBook.alt}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </Book>
      <Book img={secondBook.img} title={firstBook.title} author={secondBook.author}alt={secondBook.alt}/> */}
    </section>
  )
}
//Props is the object
const Book = (props) => {
  const { img, title, author, alt } = props.book
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      {/* {children} */}
      {/* <Author /> */}
    </article>
  )
}
// const Image = () => {
//   return (
//     <img
//       src='https://images-na.ssl-images-amazon.com/images/I/61PvPVtGLrL._SX482_BO1,204,203,200_.jpg'
//       alt='greenSheep'
//     />
//   )
// }

// const Title = () => <h1>Where is the Green Sheep?</h1>

// const Author = () => <h4>By: Mem Fox</h4>

// ReactDom.render(<Greeting />, document.getElementById('root')) // Old way to do it
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
