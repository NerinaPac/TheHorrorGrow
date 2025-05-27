import useFetchProducts from "../../hooks/useFetchProducts";
import Spinner from "../Spinner/Spinner";
import "./ListProduct.css"
import Card from "../Card/Card"


function ListProduct({productos}){

        const {products, loading, error} = useFetchProducts();
    
    if (loading) return <div className="text-center text-white"><Spinner /></div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

   

    return(
        <section className="listProducts" >

        { products.map( producto => <Card key={producto.id} producto={producto} />) }

        </section>

)

}

export default ListProduct;
