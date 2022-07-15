const addItemBtn = document.querySelector('#add-item button')
const hideList = document.querySelector('#hide')
const groceryList = document.querySelector('#grocery-list')
const inputItem = document.querySelector('#add-item input')
const groceryItem = document.querySelectorAll('.item')
const searchItem = document.querySelector('#search-item input')

//********Search Items********
searchItem.addEventListener('keyup', (e) => {
  console.log(e.target.value)
  // e.preventDefault()
  console.log(Array.from(groceryItem))
  const groceryArray = Array.from(groceryItem)
  groceryArray.filter((item) => {
    item.innerHTML === e.target.value
  })

  // for (const item of groceryItem) {
  //   console.log(item.innerHTML.includes(string))
  // }
  // console.log(string)
})

//********Hide List********
hideList.addEventListener('change', (e) => {
  if (groceryList.style.display === 'none') groceryList.style.display = ''
  else {
    groceryList.style.display = 'none'
  }
})

//********Add items********
addItemBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (inputItem.value === '') {
    alert('Please enter item to add to your grocery list')
  } else {
    const html = `<ul><li>
    <span class="item">${inputItem.value}</span>
    <span class="delete">Delete</span>
  </li></ul>`

    groceryList.insertAdjacentHTML('beforeend', html)
    inputItem.value = ''
  }
})

//********Delete items********
groceryList.addEventListener('click', (e) => {
  console.log(e.target.className)
  if (e.target.className === 'delete') e.target.parentElement.remove()
})
