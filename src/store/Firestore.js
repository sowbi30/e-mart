import { doc, setDoc, getDoc } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const CartSync = () => {
  const { user } = useAuth();
  const { cart, clearCart } = useCartContext();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const syncCart = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, { cart }, { merge: true });
      }
    };

    syncCart();
  }, [user, cart]);

  useEffect(() => {
    const loadCart = async () => {
      if (user && isMounted) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData.cart) {
            // Load the cart from Firestore
            // Dispatch an action to update the local cart state
            // Replace the dispatch function with your actual dispatch function
            dispatch({ type: "SET_CART", payload: userData.cart });
          }
        }
      }
    };

    loadCart();

    return () => {
      // Cleanup function to set isMounted to false when the component unmounts
      setIsMounted(false);
    };
  }, [user, isMounted]);

  return null;
};

export default CartSync;
