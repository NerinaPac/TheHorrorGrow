import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";



function Header({navItems, productosCarrito}){

    const location = useLocation();
    const isHome = location.pathname === "/";

    //funcion y estado de boton hamburguesa
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <header className={isHome ? "headerStyle headerHome" : "headerStyle"}>
            <div className="logoNav">
                <Logo></Logo> 
                {/* <button className="buttonBurgue" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>       */}  
            </div>

            <Nav
            burger = {isOpen}
            productosCarrito={productosCarrito}
            />
        </header>
    )

}

export default Header;