import Header from "../Header/Header.jsx"

function MainLayout ({children}){

    return(
        <>
            <Header/>
            <main>{children}</main>
        
        </>

    )

}

export default MainLayout;