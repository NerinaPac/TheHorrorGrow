import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import {CartProvider} from "./context/CartContext";
import './App.css'
import Home from "./views/Home";
import Products from "./views/Products";
import Admin from "./views/Admin"
import FormPreCompra from './views/FormPreCompra';
import Error from "./views/Error"
import About from './components/About/About';
import MinimalLayout from './components/Layout/MinimalLayout';
import MainLayout from './components/Layout/MainLayout';



function App() {
  AOS.init();

  return (
  
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} />            
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<About />} /> 
          <Route path="/products" element={<MainLayout><Products/></MainLayout>} /> 
          <Route path="/admin" element={<MinimalLayout><Admin /></MinimalLayout>} />
          <Route path="/formprecompra" element={<MinimalLayout><FormPreCompra/></MinimalLayout>} />
          <Route path="*" element={<MinimalLayout><Error /></MinimalLayout>} />
        </Routes>
      </CartProvider>  
    </BrowserRouter>

  )
}

export default App
