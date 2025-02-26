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
                <p>$30000</p>
            </div>
        </div>


    )

}

export default CartProduct;