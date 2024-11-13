import "./ContenidoInformativoPublicitario.css"
import narguileImage from '../../assets/narguile.jpg';

function ContenidoInformativoPublicitario() {
   
return(
    <div className="espacioContenedor">        
        <div className="contenedorElementosTextoImg">            
            <div className="contenedorTexto" data-aos="fade-up">                
                <h3>ELEVA TU EXPERIENCIA DE FUMAR</h3>
                <p>                
                En THG transformamos cada momento de fumar en una experiencia única. 
                Descubre nuestra exclusiva selección de pipas, cigarrillos artesanales y accesorios de diseño que se adaptan a tu estilo. 
                </p>
            </div>
            <div className="contenedorImg" data-aos="fade-up">
                <img src={narguileImage} alt="Pipa Narguile" />
            </div>
        </div>
    </div>
)

}

export default ContenidoInformativoPublicitario;