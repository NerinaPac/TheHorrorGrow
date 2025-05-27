import About from "../components/About/About";
import ContenidoInformativoPublicitario from "../components/ContenidoInformativoPublicitario/ContenidoInformativoPublicitario";
import Footer from "../components/Footer/Footer";
import ImgHome from "../components/ImgHome/ImgHome";
import Header from "../components/Header/Header"
import Cart from "../components/Cart/Cart";

function Home() {

 //Cada enlace de navegación de este Header.
    const NavItems = [
        { name: 'Producs', link: '/products' },
        { name: 'About', link: '#about' }
    ];

return(      
    <>
    <Header
     navItems = {NavItems}
    />
    
    <ImgHome />
    
    <ContenidoInformativoPublicitario />
    <About></About>
    <Footer></Footer>
    </>
    
)

}

export default Home;