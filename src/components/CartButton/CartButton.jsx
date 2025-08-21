import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartButton.css"

function CartButton ({toggleCarrito}){

  const {productosCart} = useContext(CartContext);
  
  const totalItems = productosCart.reduce((sum, item) => sum + item.cantidad, 0);

  


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