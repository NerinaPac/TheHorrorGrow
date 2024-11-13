import "./ListProduct.css"
import Card from "../Card/Card"


function ListProduct({productos}){

    return(
        <section className="listProducts" >

        { productos.map( producto => <Card key={producto.id} infoProducto={producto} />) }

        </section>

)

}

export default ListProduct;
