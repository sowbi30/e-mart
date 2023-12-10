import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/ABOUT/About";
import Home from './pages/HOME/Home';
import Products from './pages/PRODUCT/Productpage'
import Contact from './pages/CONTACT/Contact'
import Cart from "./pages/CART/Cart";
import SingleProduct from "./pages/CART/SingleProduct";
import ErrorPage from './pages/ERROR/ErrorPage'
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/HOME/Header";
import Footer from "./components/HOME/Footer";
import Checkout from "./pages/CART/Checkout";
import LoginForm from "./pages/LOGIN/LoginForm";
import Signup from './pages/LOGIN/SignUp';
import { UserProvider } from "./context/user_context";


const App = () => {

  const theme = { //in the gobalstyle ..
    colors: {   // from the globalstyle theme.colors
      heading: "violet",
      text: "purple",
      white: "#fff", 
      black: " #212529",
      helper: "#8490ff",

      bg: "lavender",
      footer_bg: "purple",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    
   
    <ThemeProvider theme={theme}> 
      <Router>
      <UserProvider>
        <GlobalStyle />
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        </UserProvider>
      </Router>
    </ThemeProvider>
  
  );
};

export default App;
