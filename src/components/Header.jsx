import {Link} from "react-router-dom";
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
                <Link className="linkNavBar" to={`/`}>
                    <li>About</li> 
                </Link>
                
                <Link className="linkNavBar" to={`/products`}>
                    <li>Products</li>
                </Link>
            </nav>
        </header>
    )

}

export default Header;