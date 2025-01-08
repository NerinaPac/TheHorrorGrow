import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

function Nav({navItems}){

   console.log(navItems)

    return(

        <nav /* className={isOpen ? `oculto` : ``} */>
            
            {navItems.map((item, index) => (
             <HashLink smooth className="linkNavBar" to={item.link} >
             <li key={index}>{item.name}</li> 
            </HashLink> 
            ))}    
            
            

        </nav>
       
    )
}

export default Nav;