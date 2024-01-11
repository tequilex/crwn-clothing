import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {ShoppingIcon, ItemCount, CartIconContainer} from './cart-icon.styles.jsx'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

  const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCardOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon