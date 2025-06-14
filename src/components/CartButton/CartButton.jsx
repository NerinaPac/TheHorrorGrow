import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartButton.css"

function CartButton ({toggleCarrito, productosCarrito}){
  
  const totalItems = productosCarrito.reduce((sum, item) => sum + item.cantidad, 0);

  


    return (
            <button className='buttonCart' onClick={toggleCarrito}>

              <FontAwesomeIcon icon={faCartShopping} />
              {totalItems > 0 && (
              <span>
                {totalItems}
              </span>
              )}
            </button>

    )

}

export default CartButton;