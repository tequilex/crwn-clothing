import { useDispatch, useSelector } from "react-redux";

import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Arrow,
  Value,
  BaseSpan,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearProduct = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addProductHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeProductHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeProductHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addProductHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
