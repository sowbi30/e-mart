import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
<<<<<<< HEAD

=======
import { Auth0Provider } from '@auth0/auth0-react';
>>>>>>> 96ae731a717ccc7ae986b0b99070b8ef2608fbd5

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<<<<<<< HEAD

    
=======
  <Auth0Provider
    domain="dev-rxwcu1m0kqpxdmw5.us.auth0.com"
    clientId="OBzGc5uNmXx1TGfMKmWrZJIkdXJ5bVpQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
>>>>>>> 96ae731a717ccc7ae986b0b99070b8ef2608fbd5
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        {/* //from add to cart   */}
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
<<<<<<< HEAD
  
=======
  </Auth0Provider>
>>>>>>> 96ae731a717ccc7ae986b0b99070b8ef2608fbd5
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
