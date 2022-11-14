export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = (data, type) => {
  let tempArray = data.flatMap((product) => product[type])
  // if (type === 'colors') {
  //   tempArray = tempArray.flat()
  // }

  return ['all', ...new Set(tempArray)]
}
