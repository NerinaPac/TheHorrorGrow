import { useState } from "react";
import { auth } from "../../firebase"; // tu configuración Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

import "./AdminLogin.css"
const AdminLogin = () => {

    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    let  autenticarUsuario = async (e) => {
        e.preventDefault();
        try {
             
            let usuario = await signInWithEmailAndPassword(auth, email, clave);
            console.log("Usuario autenticado:", usuario.user);
            setError("")

        }

        catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            setError("Clave o correo electronico incorrectos");


        }

    }

    return(

        <div className="loginAdmin">
            <h1>ADMINISTRADOR</h1>

            <form className="formularioAdmin" onSubmit={autenticarUsuario}>
                <label htmlFor="email">Email</label>

                <input type="email" id="email"  onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="clave">Contraseña</label>

                <input type="password" id="clave" onChange={(e) => setClave(e.target.value)} required />

                <button type="submit">LOGIN</button>
                <p>{error}</p>
            </form>
        
        </div>


    )
}

export default AdminLogin;