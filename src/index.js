import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import AuthProvider from "./context/AuthProvider";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-rxwcu1m0kqpxdmw5.us.auth0.com"
    clientId="OBzGc5uNmXx1TGfMKmWrZJIkdXJ5bVpQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AuthProvider>
    <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        {/* //from add to cart   */}
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </AuthProvider>
  </Auth0Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
