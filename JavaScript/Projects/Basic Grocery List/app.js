const addItemBtn = document.querySelector('#add-item button')
const hideList = document.querySelector('#hide')
const groceryList = document.querySelector('#grocery-list')
const inputItem = document.querySelector('#add-item input')
const groceryItem = document.querySelectorAll('#grocery-list li')
const searchItem = document.querySelector('#search-item input')
const headings = document.querySelector('.heading')
const panels = document.querySelectorAll('.panel')
const answerBtn = document.querySelector('#showAnswer')
const answer = document.querySelector('#answer')
let selectedPanel = null
//********Search Items********
searchItem.addEventListener('keyup', (e) => {
  const groceryArray = Array.from(groceryItem)
  console.log(groceryArray)
  groceryArray.forEach((item) => {
    console.log(item.textContent)
    if (item.textContent.toLowerCase().indexOf(e.target.value) == -1) {
      item.style.display = 'none'
    } else {
      item.style.display = 'block'
    }
  })
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

//********Display tabs********
headings.addEventListener('click', (e) => {
  let dataAttribute = e.target.dataset.clicked
  let attribute = document.querySelector(dataAttribute)

  if (e.target.tagName == 'LI') {
    if (selectedPanel !== null) {
      selectedPanel.classList.remove('selected')
    }
    selectedPanel = e.target
    selectedPanel.classList.add('selected')
  }

  panels.forEach((panel) => {
    if (panel === attribute) panel.classList.add('active')
    else panel.classList.remove('active')
  })
})

//********Show answer********
answerBtn.addEventListener('click', (e) => {
  answer.classList.add('show')
  answer.textContent = 'AN IMPASTA'
  answerBtn.style.display = 'none'
})
