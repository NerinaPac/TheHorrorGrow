import {useState, React} from 'react';
import { HashLink } from 'react-router-hash-link';
import "./Nav.css";
import CartButton from '../CartButton/CartButton';
import Cart from "../Cart/Cart";


function Nav({navItems, burger}){   

    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const toggleCarrito = () => setMostrarCarrito(!mostrarCarrito);

    return(
            <div>
                <nav  className={burger ? `oculto` : ``} >                
                    {navItems.map((item, index) => (
                    <HashLink key={index} smooth className="linkNavBar" to={item.link} >
                    <li >{item.name}</li> 
                    </HashLink> 
                    ))}
                    <CartButton
                    toggleCarrito = {toggleCarrito}
                    ></CartButton>                               
                </nav>

                <Cart
                valorCarrito = {mostrarCarrito}
                toggleCarrito = {toggleCarrito}
                />

            </div>

                  
    )
}

export default Nav;