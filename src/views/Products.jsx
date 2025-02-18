import { useEffect, useState } from "react"
import ListProduct from "../components/ListProduct/ListProduct";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Data from "../data/data.json"

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const itemsNav = [
       { name: 'Home', link: '/' }
    ]

    useEffect(() => {
      setProducts(Data.productos);
    }, []); 



    return(
        <div>
            <Header
            navItems = {itemsNav}
            />
            <ListProduct productos={products} loading={loading} />
            <Footer />
        </div>
    )
    
    }
    
    export default Products;