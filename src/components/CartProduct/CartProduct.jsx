import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartProduct.css"


function CartProduct ({infoProducto, eliminarDelCarro}) {

    let imagen = `${infoProducto.image}`;
    
    const eliminar = () => {
        eliminarDelCarro(infoProducto.id)
    }
    

    return(

        <div className="cartProductCnt">
            
            <img src={imagen} alt={infoProducto.title} className="imgCartProduct"/>
            
            <div className="cartProductInfo">
                <h4>{infoProducto.title}</h4>
                <p>Unidades: {infoProducto.cantidad}</p>
            </div>
            <div>
                <p>${infoProducto.price * infoProducto.cantidad}</p>
                
            </div>
            <button className='trashDelete' onClick={eliminar}><FontAwesomeIcon icon={faTrash} /></button>
            
        </div>


    )

}

export default CartProduct;