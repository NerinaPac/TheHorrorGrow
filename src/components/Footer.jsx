import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

function Footer(){

    return(
            <footer>
                <div className="listaRS">
                    <li className='icoFace'>
                        <FontAwesomeIcon icon={faFacebook} className='iconoFooter' />
                    </li>
                    <li className='icoIg'><FontAwesomeIcon icon={faInstagram} className='iconoFooter'/></li>
                    <li className='icoWs'><FontAwesomeIcon icon={faWhatsapp} className='iconoFooter'/></li>
                </div>
                <div>
                    <p>Telefono: 11-0808-0808</p>
                    <p>Villa Ortuzar, CABA</p>
                    <p>No tenemos Showroom</p>
                    <p>Copyright © 2024 Nerina Pac</p>
                </div>

            </footer>

    )

}

export default Footer;
