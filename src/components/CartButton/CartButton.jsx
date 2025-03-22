import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartButton.css"

function CartButton ({toggleCarrito}){

    return (
            <button className='buttonCart' onClick={toggleCarrito}>

              <FontAwesomeIcon icon={faCartShopping} />
              <span>0</span>
              
            </button>

    )

}

export default CartButton;