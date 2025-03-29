import { useEffect, useState } from "react";

export default function useFetchProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchProducts = async () => {
            try{
                const res = await fetch("https://fakestoreapi.com/products");

                if (!res.ok) {
                    setError("Hubo un problema con la petición");
                    return; 
                }

                const data = await res.json();
                setProducts(data);

            } catch(err){
                setError("Se ha producido un error");

            } finally{
                setLoading(false);
                
            }

        }

        fetchProducts();
        

    }, []);

    


    return {products, loading, error};

}