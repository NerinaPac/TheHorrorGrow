import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

function Footer(){

    return(
            <footer>
                <div className="listaRS">
                    <li className='icoFace'>
                        <Link to="https://www.facebook.com/" className='iconoFooter' >
                            <FontAwesomeIcon icon={faFacebook} className='iconoFooter' />
                        </Link>
                    </li>
                    <li className='icoIg'>
                        <Link to="https://www.instagram.com/evilink.store/" className='iconoFooter'>
                            <FontAwesomeIcon icon={faInstagram} className='iconoFooter'/>
                        </Link>    
                    </li>
                           
                    <li className='icoWs'>
                        <Link to="https://www.instagram.com/evilink.store/" className='iconoFooter'>
                            <FontAwesomeIcon icon={faWhatsapp} className='iconoFooter'/>
                        </Link>
                    </li>
                </div>
                <div className='textFooter'>
                    <p>Telefono: 11-0808-0808</p>
                    <p>Villa Ortuzar, CABA</p>
                    <p>No tenemos Showroom</p>
                    <p>Copyright © 2024 Nerina Pac</p>
                </div>

            </footer>

    )

}

export default Footer;