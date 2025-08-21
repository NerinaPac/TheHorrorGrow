
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import {CartContext} from "../../context/CartContext"
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart({ valorCarrito, toggleCarrito}) {

  const {productosCart} = useContext(CartContext);

  let aPagar = productosCart.reduce((cont, item) => {
    return item.price * item.cantidad + cont
  }, 0);


  return (
    <section className={`carrito ${valorCarrito ? "abierto" : "cerrado"}`}>
      <button className="buttonClose" onClick={toggleCarrito}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <h2>Carrito de Compras</h2>
            {productosCart.length === 0 ? (
            <p>Tu carrito está vacío</p>
             ) : ( productosCart.map((producto) => (
                <CartProduct
                    key={producto.id}
                    infoProducto={producto}
                />
                         
              ))
            )}

            {productosCart.length === 0 ? (
              <p></p>
            ) : (
              <div className='totalPagar'>
                <p>Total a pagar: ${aPagar.toFixed(2)}</p>
                <HashLink smooth to="/formprecompra" >
                    <button className="cardFinalizar">Finalizar compra</button> 
                 </HashLink>                 
              </div>      
             )}
    </section>
  );
}

export default Cart;