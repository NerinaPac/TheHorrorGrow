import {useState, React, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Nav.css";
import CartButton from '../CartButton/CartButton';
import Cart from "../Cart/Cart";

function Nav({burger, productosCarrito, eliminarDelCarro}){   

    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [ItemsVisualesNav, setItemsVisualesNav] = useState([]);

    const toggleCarrito = () => setMostrarCarrito(!mostrarCarrito);
    const location = useLocation().pathname;

    //Enlaces de navegación de cada ventana.
    const navItemsHome = [
        { name: 'Producs', link: '/products' },
        { name: 'About', link: '#about' }
    ];
    const products = [
        { name: 'Home', link: '/' }
    ];

    //Actualización de cada nombre de navegación
    useEffect(() => {
    location === "/" ? setItemsVisualesNav(navItemsHome) : setItemsVisualesNav(products);
  }, [location]);

    
    return(
            <div>
                <nav  className={burger ? `oculto` : ``}>                
                    {ItemsVisualesNav.map((item, index) => (
                    <HashLink key={index} smooth className="linkNavBar" to={item.link} >
                    <li >{item.name}</li> 
                    </HashLink> 
                    ))}
                    <CartButton
                    toggleCarrito = {toggleCarrito}
                    productosCarrito = {productosCarrito}
                    ></CartButton>                               
                </nav>

                <Cart
                valorCarrito = {mostrarCarrito}
                toggleCarrito = {toggleCarrito}
                productosCarrito = {productosCarrito}
                eliminarDelCarro={eliminarDelCarro}
                />

            </div>

                  
    )
}

export default Nav;