import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


function Header(){

    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <header>
            <div className="logoNav">
                <Link className="linkNavBar" to={`/`}>
                    <h1>The Horror Grow</h1>
                </Link>
                <button className="buttonBurgue" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>           
            <nav className={isOpen ? `oculto` : ``}> 
                <HashLink smooth className="linkNavBar" to="#about">
                    <li>About</li> 
                </HashLink>
                
                <Link className="linkNavBar" to={`/products`}>
                    <li>Products</li>
                </Link>
            </nav>
        </header>
    )

}

export default Header;