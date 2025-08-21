import AutocompleteGoogle from "../AutocompleteGoogle/AutocompleteGoogle";
import {useState, useContext} from "react";
import {CartContext} from "../../context/CartContext"

import "./FormEnvio.css";


function FormEnvio(){
    
    const {productosCart} = useContext(CartContext);

    const [direccion, setDireccion] = useState("");
    const [infoForm, setInfoForm] = useState({
        nombreApellido: "",
        telefono:"",
        domicilio:"",
        envioRetiro:""
    });

    const infoInput = (e) => { // Caputa los datos del input
        const {id, value} = e.target; //variables dinamicas
        setInfoForm((prev) => ({...prev, [id]: value, domicilio: direccion}));   
               
    }

    const aPagar = productosCart.reduce((total, producto) => total + producto.price * producto.cantidad, 0);


    let enviarPedidoPorWP = (e) => {
        e.preventDefault()
        const nroTelefono = "5493487308228";
        let mensaje = `Hola, quiero hacer una compra. Mis datos son:

        *Nombre y Apellido:* ${infoForm.nombreApellido}
        *Telefono:* ${infoForm.telefono}
        *Domicilio:* ${infoForm.domicilio}
        *Forma de Entrega:* ${infoForm.envioRetiro}
        *Mi pedido:*\n\n`

        productosCart.forEach((producto) => {
            mensaje += `*  ${producto.title} x${producto.cantidad} - $${(producto.price * producto.cantidad).toFixed(2)}\n`;
        });

        mensaje += `\n*Total: $${aPagar.toFixed(2)}*`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://wa.me/${nroTelefono}?text=${mensajeCodificado}`;
        window.open(url, "_blank");


      }

      
    

    return(

        <div className="formContenedor">
            
            <form action="" className="formularioPreCompra">
                        <h2>Finalizar Compra</h2>
                        
                        <label htmlFor="nombreApellido" className="labelsCompra">Nombre y Apellido</label>
                        <input type="text" id="nombreApellido" onChange={infoInput} placeholder="Introduce tu Nombre y Apellido"required/>

                        <label htmlFor="telefono" className="labelsCompra">Teléfono</label>
                        <input type="number" onChange={infoInput} id="telefono" placeholder="Introduce tu Número de Teléfono" required />

                        <label htmlFor="domicilio" className="labelsCompra">Domicilio</label>
                        <div className="autocomplete-google">              
                            <AutocompleteGoogle  setDireccion={setDireccion}/>
                        </div>

                        <label htmlFor="envioRetiro" className="labelsCompra">Entrega de pedido</label>                
                        <select name="" id="envioRetiro" onChange={infoInput}>
                            <option value="">Elegi una opción</option>
                            <option value="Retiro del local">Retiro del local</option>
                            <option value="Envio a domicilio">Envío a domicilio</option>
                        </select>

                        <button className="bntFinalizarCompra" onClick={enviarPedidoPorWP}>FINALIZAR COMPRA</button>


            </form>
       </div>

    )


}

export default FormEnvio;