import "./Card.css"
import Counter from "../Counter/Counter";

function Card({infoProducto}) {
    let imagen = `${infoProducto.imagen}`;

    return(
       <div className="card">
            <img 
            src= {imagen}
            alt="Producto terrorífico" 
            className="card-img" 
            />
            <h3 className="card-title">{infoProducto.nombre}</h3>
            <p className="card-description">
                {infoProducto.descripcion}
            </p>
            <h3>${infoProducto.precio}</h3>
            <Counter
            infoProducto={infoProducto}
            ></Counter>
            <button className="card-btn">Añadir al carrito</button>
            

        </div>

    );



}

export default Card;