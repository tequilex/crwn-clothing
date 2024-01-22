import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";


import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
const dispatch = useDispatch();

const isCartOpen = useSelector(selectIsCartOpen);
const cartCount = useSelector(selectCartCount);

  const toggleIsCardOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCardOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
