import "./Ubicacion.css"

function Ubicacion(){

    return(
            <div className="contenedorUbicacion">
                
                <div className="contenedorMapaYText">    
                    <div className="contenedorTexto">
                         <h3>DÓNDE ESTAMOS?</h3>
                        <p>Nos encontramos en Villa Ortuzar, a 5 cuadras de la Estación "Tronador" del Subte "B".</p>
                        <p>No tenemos local al público.</p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.4676658043036!2d-58.46956029734402!3d-34.58050282722511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6748368b83f%3A0xfc99d4767fbfd6ac!2sCharlone%20%26%20Holmberg%2C%20C1427%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1729132206351!5m2!1ses-419!2sar"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>

    )

}

export default Ubicacion;
