import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const exist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (exist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const exist = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (exist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  // console.log({...cartItems, quantity: productToRemove.quantity - 1});
  // console.log(cartItems);
  // console.log(...cartItems);
  // console.log(productToRemove);
  // console.log({...productToRemove, quantity: 222});
  // console.log({...productToRemove});
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  checkoutTotal: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  setCartCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
    setCheckoutTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    cartCount,
    cartItems,
    isCartOpen,
    checkoutTotal,
    addItemToCart,
    setIsCartOpen,
    clearItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
