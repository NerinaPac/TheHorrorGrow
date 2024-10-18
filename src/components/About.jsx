import "./About.css"
import imgJasonFreddy from "../assets/about_jason_freddy.webp"
import Ubicacion from "./Ubicacion";


function About() {

    return (

        <section id="about">
            <h2 data-aos="fade-up">ACERCA DE NOSOTROS</h2>
            <div className="contenedorAbout">
                <div className="contenedorImg" data-aos="fade-up">
                    <img src={imgJasonFreddy}></img>
                </div>
                <div className="textAbout" data-aos="fade-up">
                    <p>Somos una pequeña empresa de amigos que comparte una gran pasión: el placer de fumar. Nos encanta disfrutar de un buen cigarrillo de marihuana, utilizando además, productos que hagan de esta experiencia algo especial. 
                        Nos aseguramos de ofrecer lo mejor para quienes, como nosotros, valoran un buen momento de relax. </p>
                </div>

            </div>
        
        </section>


    )


}

export default About;