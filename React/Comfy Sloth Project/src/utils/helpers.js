export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = () => {}
