
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart ({valorCarrito, toggleCarrito}) {

    

    return(

        <div className={ valorCarrito ? "carrito" : "carritoEscondido"}>
            <button className="buttonClose" onClick={toggleCarrito}> <FontAwesomeIcon icon={faCircleXmark} /></button>
            <h2>Carrito de Compras</h2>
            <CartProduct />
        </div>
        
    )

}

export default Cart;