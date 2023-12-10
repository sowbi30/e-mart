import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from "../reducer/cartReducer";

const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem('Cart');
  return localCartData ? JSON.parse(localCartData) : [];
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateCartData = async (cartData) => {
    try {
      // Example API endpoint, replace with your actual endpoint
      await axios.post('https://6557461bbd4bcef8b6125d04.mockapi.io/RegisterUser', { cart: cartData });
    } catch (error) {
      console.error('Error updating cart data:', error);
    }
  };

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    updateCartData([...state.cart, { id, color, amount, product }]);
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("Cart", JSON.stringify(state.cart));
    
    // Update cart data in the API when the local cart changes
    updateCartData(state.cart);
  }, [state.cart]);

  // Provide context values
  const contextValues = {
    ...state,
    addToCart,
    setDecrease,
    setIncrement,
    removeItem,
    clearCart,
  };

  // Return CartContext.Provider with context values
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
