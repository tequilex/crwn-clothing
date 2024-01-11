import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, checkoutTotal } = useContext(CartContext);

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>PRODUCT</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>DESCRIPTION</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>QUANTITY</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>PRICE</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>REMOVE</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${checkoutTotal}</Total>
    </CheckoutPageContainer>
  );
};

export default Checkout;
