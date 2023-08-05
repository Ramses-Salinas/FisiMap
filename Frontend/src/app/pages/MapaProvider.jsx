import { useState } from "react"
import { MapaContext } from "./MapaContext"
import point from '../../data/points.json'
import pointp2 from '../../data/pointsp2.json'

export const MapaProvider = ({children}) => {
    
    /* definimos el provider, este provee de datos a los hijos, cualquier hijo de UserProvider accederá a ellos */
    // el valor será un objeto {hola:'Mundo'}
    const [ventanaModal, setVentanaModal] = useState({
        title: 'Hola',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
        img:'https://upload.wikimedia.org/wikipedia/commons/4/46/UNMSM_Facultad_de_Ingenier%C3%ADa_de_Sistemas_e_Inform%C3%A1tica_2019_-_Vista_lateral.jpg',
        isActive:false
    })

    const [selectedPlace, setSelectedPlace] = useState({
        p1:null,
        isActiveP1: false,
        p2:null,
        isActiveP2: false
    })

    const [visibleFormRuta, setVisibleFormRuta] = useState(false);
    const [piso, setPiso] = useState(1);

    // const [dataPoints, setDataPoint] = useState(point) 
    const dataPoints = point;
    const dataPointsp2 = pointp2;

    const [pointA, setPointA] = useState(null);
    const [pointB, setPointB] = useState(null);

    const [pointAp2, setPointAp2] = useState(null);
    const [pointBp2, setPointBp2] = useState(null);

    return (
        <MapaContext.Provider value={{hola:'Mundo',ventanaModal,setVentanaModal,
                                        selectedPlace, setSelectedPlace,
                                        visibleFormRuta, setVisibleFormRuta,
                                        piso, setPiso,
                                        pointA, setPointA,
                                        pointB, setPointB,
                                        pointAp2, setPointAp2,
                                        pointBp2, setPointBp2,
                                        dataPoints,
                                        dataPointsp2
                                        }} >
            
            {children /* vamos a renderizar los componentes hijos dentro del Context */}
        </MapaContext.Provider>
    )
}