import { useEffect, useState } from "react"
import ListProduct from "../components/ListProduct/ListProduct";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Data from "../data/data.json"

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setProducts(Data.productos);
    }, []); 



    return(
        <div>
            <Header />
            <ListProduct productos={products} loading={loading} />
            <Footer />
        </div>
    )
    
    }
    
    export default Products;