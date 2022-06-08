const Book = (props) => {
  const { img, title, author, alt } = props
  const clickHandler = () => alert('Good you clicked!')
  const complexExample = (author) => console.log(author)
  console.log(props)
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt={alt} />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h2>{author}</h2>
      <button type='button' onClick={() => complexExample(author)}>
        Complex Example
      </button>
      <button type='button' onClick={clickHandler}>
        Click Here
      </button>
      {/* {children} */}
      {/* <Author /> */}
    </article>
  )
}

export default Book
