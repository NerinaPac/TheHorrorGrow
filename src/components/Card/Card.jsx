import "./Card.css"
import Counter from "../Counter/Counter";

function Card({producto}) {
    let imagen = `${producto.image}`;
    const handleClick = () => {
    console.log("🛒 Producto seleccionado:", producto);
    // Acá podés llamar a una función para agregar al carrito, por ejemplo
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