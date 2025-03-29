import "./Card.css"
import Counter from "../Counter/Counter";

function Card({infoProducto}) {
    let imagen = `${infoProducto.image}`;

    return(
       <div className="card">
            <img 
            src= {imagen}
            alt="Producto terrorífico" 
            className="card-img" 
            />
            <h3 className="card-title">{infoProducto.title}</h3>
            <p className="card-description">
                {infoProducto.description}
            </p>
            <h3>${infoProducto.price}</h3>
            <Counter
            infoProducto={infoProducto}
            ></Counter>
            <button className="card-btn">Añadir al carrito</button>
            

        </div>

    );



}

export default Card;