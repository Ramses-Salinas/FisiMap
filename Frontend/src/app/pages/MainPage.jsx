import { useContext } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { InfoMapa } from "../components/InfoMapa"
import { Mapa } from "../components/Mapa"
import { MapaContext } from "./MapaContext"


export const MainPage = () =>{

    // const {ventanaModal} = useContext(MapaContext)

    // const {title,content,img,isActive} = ventanaModal;

    return(
        <main className="container mt-5">
            <Header/>
            {/* <InfoMapa isView={isActive} title={title} content={content} img={img}/> */}
            <Mapa/>
            <Footer/>
        </main>
    )
}