import {useState} from "react";
import "./Counter.css";

function Counter ({infoProducto}) {

    const [inputCountValue, setinputValue] = useState(0);
    const stock = infoProducto.stock;

    const sumar = () => setinputValue(prev => (prev < stock ? prev + 1 : prev));
    const restar = () => setinputValue(prev => (prev > 0 ? prev - 1 : prev));  

    return( 
        <div className="counterContain">
            <button onClick={restar}> - </button>
            <input type="text" value={inputCountValue} readOnly/>
            <button onClick={sumar}> + </button>
            
        </div>
    )
}

export default Counter;