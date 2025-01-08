import logo from "../../assets/LOGO_PNG.png"
import "./Logo.css"

function Logo() {

    return(
        <div className= "containerLogo">

            <img className="imgLogo" src={logo} alt="Nombre de la tienda" />

        </div>
    );

    

}
 
export default Logo;