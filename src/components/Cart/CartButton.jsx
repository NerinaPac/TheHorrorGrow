import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css"

function CartButton (){

    return (
            <button className='buttonCart'>

              <FontAwesomeIcon icon={faCartShopping} />
              <span>0</span>
              
            </button>

    )

}

export default CartButton;