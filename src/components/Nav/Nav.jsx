import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "./Nav.css";
import CartButton from '../CartButton/CartButton';


function Nav({navItems, burger}){   

    return(
            <nav  className={burger ? `oculto` : ``} >                
                {navItems.map((item, index) => (
                <HashLink key={index} smooth className="linkNavBar" to={item.link} >
                <li >{item.name}</li> 
                </HashLink> 
                ))}
                <CartButton></CartButton>                
            </nav>
                  
    )
}

export default Nav;