import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Home from "./views/Home";
import Products from "./views/Products";

import Error from "./views/Error"
import About from './components/About/About';
import Header from './components/Header/Header';


function App() {
  AOS.init();
  const [productosCart, setProductosCart] = useState([]);

  const agregarAlCarro = (product) => {
    setProductosCart([...productosCart, product]);
  };
  

  return (
  
    <BrowserRouter>      
      <Header productosCarrito={productosCart} />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Products agregarAlCarro={agregarAlCarro} />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


     
  
  )
}

export default App
