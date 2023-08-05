
import { Routes, Route, Navigate} from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { MapaProvider } from "../pages/MapaProvider"


export const MainRouter = () =>{

    return(
        
        <>
            <MapaProvider>
                {/* Aquí mostramos el navbar y el resto de rutas */}
                {/* <Header CartItem={CartItem} /> */}
                <Routes>
                    <Route path="/" element = { <MainPage/> }/>
                    {/* a la ruta hero le añadimos el comodín /:heroId */}
                    {/* <Route path="hero/:heroId" element = { <HeroPage/> }/> */}
                    <Route path="/*" element={<Navigate to="/"/>} />
                    {/* <Route path="/" element = { <Navigate to ="/marvel"/> }/> */}

                </Routes>
                {/* <Footer /> */}
            </MapaProvider>
        </>
    )
}