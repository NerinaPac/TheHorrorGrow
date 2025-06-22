
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"
import CartProduct from "../CartProduct/CartProduct";

function Cart({ valorCarrito, toggleCarrito, productosCarrito, eliminarDelCarro }) {

  let aPagar = productosCarrito.reduce((cont, item) => {
    return item.price * item.cantidad + cont
  }, 0);

  let enviarPedidoPorWP = () => {
    const nroTelefono = "5493487308228";
    let mensaje = "Hola! Me encanta tu tienda, quiero hacer el siguiente pedido: \n\n"
    productosCarrito.forEach((producto) => {
      mensaje += `• ${producto.title} x${producto.cantidad} - $${(producto.price * producto.cantidad).toFixed(2)}\n`;
    });
    mensaje += `\nTotal: $${aPagar.toFixed(2)}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${nroTelefono}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
  }

  return (
    <section className={`carrito ${valorCarrito ? "abierto" : "cerrado"}`}>
      <button className="buttonClose" onClick={toggleCarrito}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <h2>Carrito de Compras</h2>
            {productosCarrito.length === 0 ? (
            <p>Tu carrito está vacío</p>
             ) : ( productosCarrito.map((producto) => (
                <CartProduct
                    key={producto.id}
                    infoProducto={producto}
                    eliminarDelCarro={eliminarDelCarro}
                />
                         
              ))
            )}

            {productosCarrito.length === 0 ? (
              <p></p>
            ) : (
              <div className='totalPagar'>
                <p>Total a pagar: ${aPagar.toFixed(2)}</p>
                <button className="cardFinalizar" onClick={enviarPedidoPorWP}>Finalizar compra</button>
              </div>      
             )}
    </section>
  );
}

export default Cart;