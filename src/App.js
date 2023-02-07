import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import {ThemeProvider} from "styled-components";
import Header from './Components/Header';
import Footer from "./Components/Footer";
// import Login from "./Components/Login";


const App = () => {

  const theme = {
    colors: {
      heading : "rgb(24  24 29)",
      text : "rgba(29 , 29 , 29 , 0.8)",
      white : "#fff",
      red:"ff0000",
      black : "#212529",
      helper : "#002c3e",
      bg : "#6254f2",
      footer_bg : "#0a1435",
      btn : "rgb(98, 84, 243)",
      border : "rgba(98 , 84 , 273 , 0.5)",
      hr : "#ffffff",
      gradient:"linear-gradient(0deg , rgb(132 144 255 ) 0%, rgb(98 184 252 ) 100%",
      shadow : "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport : "rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media : {
      mobile : "1000px",

    }
  }
  return(
    <ThemeProvider theme={theme}>
  <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
  </Router>
  
  </ThemeProvider>
  );
};

export default App;


