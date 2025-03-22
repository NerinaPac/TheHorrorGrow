import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartProduct.css"
import producto from "../../../public/products/01.jpg"

function CartProduct () {

    return(

        <div className="cartProductCnt">
            
            <img src={producto} alt="una pipa de agua" className="imgCartProduct"/>
            
            <div className="cartProductInfo">
                <h4>Nombre del producto</h4>
                <p>Obsrevaciones del producto.</p>    
            </div>
            <div>
                <p>$30000000</p>
                
            </div>
            <button className='trashDelete'><FontAwesomeIcon icon={faTrash} /></button>
            
        </div>


    )

}

export default CartProduct;