import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price,
  RemoveButton,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const clearProduct = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
      <RemoveButton onClick={clearProduct}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
