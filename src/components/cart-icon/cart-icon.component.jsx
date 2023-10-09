import { useContext } from 'react'
import { ReactComponent as BagIcon} from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

  const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div onClick={toggleIsCardOpen} className='cart-icon-container'>
      <BagIcon className='shopping-icon' />
      <span className='shopping-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon