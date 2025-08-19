const libraries = ["places"];
import {Autocomplete, LoadScript} from "@react-google-maps/api";
import {useRef} from "react";
import "./AutocompleteGoogle.css";

const AutocompleteGoogle = ({setDireccion}) => {

    const autocompleteRef = useRef(null);

    const alCargar = (autocomplete) => { //autocomplete es el metodo de google que devuelve la información de lo que seleccioa el usuario
        autocompleteRef.current = autocomplete; //Se guarda en useRef.current para ser utilzado
    };

    const validarDireccion = () => {
                
        const lugar = autocompleteRef.current.getPlace();
        
        if(lugar && lugar.formatted_address){
            setDireccion(lugar.formatted_address)
        }
        

    }

    return( 

        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
            <Autocomplete onLoad={alCargar} onPlaceChanged={validarDireccion}>
                <input
                    type="text"
                    className="inputDireccion"
                />
            </Autocomplete>
        </LoadScript>

    )


}

export default AutocompleteGoogle;