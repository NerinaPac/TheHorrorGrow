
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart ({valorCarrito, toggleCarrito, productosCarrito, eliminarDelCarro}) {

    

    return(

        <div className={ valorCarrito ? "carrito" : "carritoEscondido"}>
            <button className="buttonClose" onClick={toggleCarrito}> <FontAwesomeIcon icon={faCircleXmark} /></button>
            <h2>Carrito de Compras</h2>
            {productosCarrito.map((producto, index)=> (
               <CartProduct key={index}  infoProducto={producto} eliminarDelCarro={eliminarDelCarro}/> 

            ))}
            
        </div>
        
    )

}

export default Cart;