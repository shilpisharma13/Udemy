import React, { useState } from 'react'
import data from './data'

function App() {
  const [para, setPara] = useState([])
  const [count, setCount] = useState(0)

  // const generatePara = (num) => {
  //   let string = ''
  //   for (const [i, val] of data.entries()) {
  //     if (i <= num) {
  //       string += `${data[i]}\n`
  //     }
  //   }
  //   return string
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = count
    console.log(amount)
    if (count <= 0) {
      amount = 1
    }
    if (count > data.length) {
      amount = data.length
    }
    setPara(data.slice(0, amount))
  }
  // const input = 20
  // let output = ''
  // if (input < data.length) {
  //   output = generatePara(input)
  // }
  // if (input > data.length) {
  //   for (let i = 1; i <= Math.floor(input / data.length); i++) {
  //     output += generatePara(input)
  //   }
  //   output += generatePara(input % data.length)
  // }

  return (
    <>
      <section className='section-center'>
        <h2>tired of boring lorem ipsum?</h2>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>Paragraphs:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        <article className='lorem-text'>
          {para.map((text, index) => {
            return (
              <div key={index}>
                <p>{text}</p>
              </div>
            )
          })}
        </article>
      </section>
    </>
  )
}

export default App
