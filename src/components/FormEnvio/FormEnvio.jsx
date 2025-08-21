import AutocompleteGoogle from "../AutocompleteGoogle/AutocompleteGoogle";
import {useState} from "react";
import "./FormEnvio.css";


function FormEnvio(){
    
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

    let enviarPedidoPorWP = () => {
        const nroTelefono = "5493487308228";
        let mensaje = "Hola! Me encanta tu tienda, quiero hacer el siguiente pedido: \n\n"
        productosCarrito.forEach((producto) => {
          mensaje += `• ${producto.title} x${producto.cantidad} - $${(producto.price * producto.cantidad).toFixed(2)}\n`;
        });
        mensaje += `\nTotal: $${aPagar.toFixed(2)}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://wa.me/${nroTelefono}?text=${mensajeCodificado}`;
        window.open(url, "_blank");
      }


    const enviarForm = (e) =>{
        e.preventDefault();
        const mensaje = Object.entries(infoForm)
        .map(([campo, valor]) => `${campo}: ${valor}`)
        .join("\n");
    }

    return(

       <form action="" className="formularioPreCompra" onSubmit={enviarForm}>
        
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
                    <option value="retiro">Retiro del local</option>
                    <option value="envio">Envío a domicilio</option>
                </select>

                <button className="bntFinalizarCompra" type="submit">FINALIZAR COMPRA</button>


       </form>

    )


}

export default FormEnvio;