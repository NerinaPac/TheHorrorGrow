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

  //Logica de Carrito de Compras: 

  const [productosCart, setProductosCart] = useState([]);
  
  const agregarAlCarro = (product) => {
    
      const existe = productosCart.find(item => item.id === product.id);
      let nuevoCarrito;
      if (existe) {      
        nuevoCarrito = productosCart.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
            nuevoCarrito = [...productosCart, { ...product, cantidad: 1 }];
      }
      setProductosCart(nuevoCarrito);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

  };

  const eliminarProducto = (id) => {
      const nuevoCarrito = productosCart.map(item => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        })
        .filter(item => item.cantidad > 0);

      setProductosCart(nuevoCarrito);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
};
  
  console.log(window.localStorage)

  return (
  
    <BrowserRouter>      
      <Header productosCarrito={productosCart} eliminarDelCarro={eliminarProducto} />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Products agregarAlCarro={agregarAlCarro}  />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


     
  
  )
}

export default App
