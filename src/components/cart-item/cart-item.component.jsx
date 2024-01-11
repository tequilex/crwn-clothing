import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
  const { clearItemFromCart } = useContext(CartContext);

  const clearProduct = () => clearItemFromCart(cartItem);

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
