import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Products from "./views/Products";

import Error from "./views/Error"


function App() {
  AOS.init();

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


     
  
  )
}

export default App
