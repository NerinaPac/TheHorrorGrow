import {Link} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";



function Header(){

    const NavItems = [
        { name: 'Producs', link: '/products' },
        { name: 'About', link: '#about' }
    ];

  
    /* const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => setIsOpen(!isOpen); */

    return(
        <header>
            <div className="logoNav">
                <Logo></Logo>
                <button className="buttonBurgue" /* onClick={toggleMenu} */>
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <Nav
            navItems = {NavItems}
            />           
            
        </header>
    )

}

export default Header;