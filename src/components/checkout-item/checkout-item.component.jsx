import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearProduct = () => clearItemFromCart(cartItem);
  const addProductHandler = () => addItemToCart(cartItem);
  const removeProductHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div onClick={removeProductHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addProductHandler} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <span onClick={clearProduct} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
