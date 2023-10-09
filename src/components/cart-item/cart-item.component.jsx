import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const {clearItemFromCart} = useContext(CartContext)

  const clearProduct = () => clearItemFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <div onClick={clearProduct} className="remove-button">&#10005;</div>
    </div>
  );
};

export default CartItem;
