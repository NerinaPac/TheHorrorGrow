import "./Card.css"

function Card() {


    return(
       <div className="card">
            <img 
            src="https://http2.mlstatic.com/D_NQ_NP_918696-MLU71822007502_092023-O.webp" 
            alt="Producto terrorífico" 
            className="card-img" 
            />
            <h3 className="card-title">Picador Lion Rolling Circus dorado</h3>
            <p className="card-description">
                Este es un producto espeluznante para tu colección de terror. ¡No te lo pierdas!
            </p>
            <button className="card-btn">Añadir al carrito</button>
        </div>

    );



}

export default Card;