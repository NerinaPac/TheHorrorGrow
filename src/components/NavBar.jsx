import {Link} from "react-router-dom";
import './NavBar.css'


function NavBar(){

    return(
        <header>
            <nav>
                <Link className="linkNavBar" to={`/`}>
                    <li>About</li> 
                </Link>
                <Link className="linkNavBar" to={`/`}>
                    <h1>The Horror Grow</h1>
                </Link>
                <Link className="linkNavBar" to={`/products`}>
                    <li>Products</li>
                </Link>
            </nav>


        </header>

    )

}

export default NavBar;