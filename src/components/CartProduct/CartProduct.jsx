import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartProduct.css"


function CartProduct ({infoProducto}) {

    let imagen = `${infoProducto.image}`;

    return(

        <div className="cartProductCnt">
            
            <img src={imagen} alt={infoProducto.title} className="imgCartProduct"/>
            
            <div className="cartProductInfo">
                <h4>{infoProducto.title}</h4>  
            </div>
            <div>
                <p>{infoProducto.price}</p>
                
            </div>
            <button className='trashDelete'><FontAwesomeIcon icon={faTrash} /></button>
            
        </div>


    )

}

export default CartProduct;