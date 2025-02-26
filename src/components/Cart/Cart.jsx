import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart () {

    return(

        <div className="carrito">
            <button className="buttonClose"> <FontAwesomeIcon icon={faCircleXmark} /></button>
            <h2>Carrito de Compras</h2>

            <CartProduct></CartProduct>
        </div>
        
    )

}

export default Cart;