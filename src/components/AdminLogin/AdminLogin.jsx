import "./AdminLogin.css"
const AdminLogin = () => {

    return(

        <div className="loginAdmin">
            <h1>ADMINISTRADOR</h1>

            <form className="formularioAdmin" action="">
                <label htmlFor="usuario">Nombre de Usuario</label>
                <input type="text" name="usuario"></input>
                <label htmlFor="clave">Nombre de Usuario</label>
                <input type="password" name="clave"></input>
                <button>LOGIN</button>
            </form>
        
        </div>


    )
}

export default AdminLogin;