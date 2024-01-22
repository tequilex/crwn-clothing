import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const checkoutTotal = useSelector(selectCartTotal);

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
