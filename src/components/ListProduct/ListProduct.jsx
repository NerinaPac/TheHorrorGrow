import useFetchProducts from "../../hooks/useFetchProducts";
import "./ListProduct.css"
import Card from "../Card/Card"


function ListProduct({productos}){

    const {products, loading, error} = useFetchProducts();
    
    if (loading) return <div className="text-center text-white">Cargando productos...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    console.log(products);

    return(
        <section className="listProducts" >

        { productos.map( producto => <Card key={producto.id} infoProducto={producto} />) }

        </section>

)

}

export default ListProduct;
