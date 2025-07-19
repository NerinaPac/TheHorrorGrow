import "./FormEnvio.css";

function FormEnvio(){
    
    return(

       <form action="" className="formularioPreCompra">
        
             <label htmlFor="nombreApellido" className="labelsCompra">Nombre y Apellido</label>

                <input type="text" id="nombreApellido" required/>

                <label htmlFor="telefono" className="labelsCompra">Teléfono</label>

                <input type="number" id="telefono" required />

                <label htmlFor="domicilio" className="labelsCompra">Domicilio</label>

                <input type="text" id="domicilio" required />

                <label htmlFor="envioRetiro" className="labelsCompra">Entrega de pedido</label>
                
                <select name="" id="envioRetiro">
                    <option value="">Elegi una opción</option>
                    <option value="retiro">Retiro del local</option>
                    <option value="envio">Envío a domicilio</option>
                </select>


                <button className="bntFinalizarCompra" type="submit">FINALIZAR COMPRA</button>


       </form>

    )


}

export default FormEnvio;