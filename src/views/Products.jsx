import { useEffect, useState } from "react"
import ListProduct from "../components/ListProduct/ListProduct";
import Footer from "../components/Footer/Footer";
import Data from "../data/data.json";

function Products({agregarAlCarro}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
      setProducts(Data.productos);
    }, []); 

    return(
        <div>            
            <ListProduct productos={products} loading={loading} agregarAlCarro={agregarAlCarro} />
            <Footer />
        </div>
    )
    
    }
    
    export default Products;