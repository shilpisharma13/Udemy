import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { calcTotals } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calcTotals())
  }, [cartItems])
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App