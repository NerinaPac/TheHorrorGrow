import { createContext, useState } from "react";
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

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
      toast.success('Producto añadido al carrito')

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

    return(
        <CartContext.Provider value={{productosCart, setProductosCart, agregarAlCarro, eliminarProducto}}>
            {children}
        </CartContext.Provider>

    );

}