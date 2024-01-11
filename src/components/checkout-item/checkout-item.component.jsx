import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Arrow,
  Value,
  BaseSpan
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearProduct = () => clearItemFromCart(cartItem);
  const addProductHandler = () => addItemToCart(cartItem);
  const removeProductHandler = () => removeItemFromCart(cartItem);

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
