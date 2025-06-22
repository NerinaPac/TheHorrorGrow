import "./Card.css"
import Counter from "../Counter/Counter";

function Card({producto, agregarAlCarro}) {
    let imagen = `${producto.image}`;
    
    // Función para agregar al carrito
    const handleClick = () => {
    agregarAlCarro(producto)
    
  };
  

    return(
       <div className="card">
            <img 
            src= {imagen}
            alt="Producto terrorífico" 
            className="card-img" 
            />
            <h3 className="card-title">{producto.title}</h3>
            <p className="card-description">
                {producto.description}
            </p>
            <h3>${producto.price}</h3>
            <Counter
            infoProducto={producto}
            ></Counter>
            <button className="card-btn" onClick={handleClick}>Añadir al carrito</button>
            

        </div>

    );



}

export default Card;