import useFetchProducts from "../../hooks/useFetchProducts";
import Spinner from "../Spinner/Spinner";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import "./ListProduct.css"
import Card from "../Card/Card"


function ListProduct({}){
    const {products, loading, error} = useFetchProducts();
    const {agregarAlCarro} = useContext(CartContext);
    
    if (loading) return <div className="text-center text-white"><Spinner /></div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

   

    return(
        <section className="listProducts" >

        { products.map( producto => <Card key={producto.id} producto={producto} agregarAlCarro={agregarAlCarro} />) }

        </section>

)

}

export default ListProduct;
