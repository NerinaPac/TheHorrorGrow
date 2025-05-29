
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart({ valorCarrito, toggleCarrito, productosCarrito, eliminarDelCarro }) {
  return (
    <aside className={`carrito ${valorCarrito ? "abierto" : "cerrado"}`}>
      <button className="buttonClose" onClick={toggleCarrito}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <h2>Carrito de Compras</h2>
            {productosCarrito.length === 0 ? (
            <p>Tu carrito está vacío</p>
        ) : (
                productosCarrito.map((producto) => (
                <CartProduct
                    key={producto.id}
                    infoProducto={producto}
                    eliminarDelCarro={eliminarDelCarro}
                />
                ))
            )}
      

      
    </aside>
  );
}

export default Cart;