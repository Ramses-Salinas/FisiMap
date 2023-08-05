import { useContext, useEffect, useState } from "react";
import './formruta.css'
import { MapaContext } from "../pages/MapaContext";
import closeimg from '../../assets/close.svg'

export const FormRuta = () =>{

    const {setVisibleFormRuta, dataPoints,dataPointsp2,
        setPointA,setPointB,setPointAp2,setPointBp2,piso} = useContext(MapaContext)
    // const [inicio, setInicio] = useState('')
    // const [final, setFinal] = useState('')
    let places;
    if(piso == 1){
        places = dataPoints.filter(p => p.zona!="Pasillo")
    }else if(piso==2){
        places = dataPointsp2.filter(p => p.zona!="Pasillo")
    }

    useEffect(() => {
        
        console.log(dataPoints)
        console.log(places)
    }, [])

    const handleChangeInit = (e) => {
        // setInicio(e.target.value);

        if(piso == 1){
            if(e.target.value == ""){
                setPointA(null)
            }else{
                setPointA(e.target.value)
            }
        }else if(piso==2){
            if(e.target.value == ""){
                setPointAp2(null)
            }else{
                setPointAp2(e.target.value)
            }
        }

        
    }

    const handleChangeFinal = (e) => {
        if(piso == 1){
            if(e.target.value == ""){
                setPointB(null)
            }else{
                setPointB(e.target.value)
            }
        }else if(piso==2){
            if(e.target.value == ""){
                setPointBp2(null)
            }else{
                setPointBp2(e.target.value)
            }
        }
    }

    const cerrarForm = (e) => {
        e.preventDefault();
        setVisibleFormRuta(false)
        setPointA(null)
        setPointB(null)
    }

    const handleSubmitRoute = (e) => {
        e.preventDefault();
        // setSelectedPlace({
        //     ...selectedPlace,
        //     p1:null,
        // })
    }

    return(
        <form className="form__ruta" onSubmit={handleSubmitRoute}>
            <div className="form__container_ruta">
                <div className="form__group_ruta">
                    {/* <input type="text" id="usuario" className="form__input_ruta" placeholder="De" 
                        value={inicio} onChange={handleChangeInit} required/> */}
                    <select name="levels" className="form__input_ruta" onChange={handleChangeInit}>
                    <option value="" defaultValue>--De--</option>
                        {
                            places.map(p => (
                                <option key={p.id} value={p.id}>{p.zona}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form__group_ruta">
                    {/* <input type="text" id="usuario" className="form__input_ruta" placeholder="A" value={final} onChange={handleChangeFinal} required/> */}
                    <select name="levels" className="form__input_ruta" onChange={handleChangeFinal}>
                        <option value="" defaultValue>--Hasta--</option>
                        {
                            places.map(p => (
                                <option key={p.id} value={p.id} defaultValue>{p.zona}</option>
                            ))
                        }
                    </select>
                </div>
                {/* <input type="submit" className="form__submit_ruta" value="Ver ruta"/> */}
                <div className="btn_function" onClick={cerrarForm}>
                    <img src={closeimg} alt="Cerrar" />
                    <div>Cerrar</div>
                    {/* <button  onClick={cerrarForm}>Cerrar</button> */}
                </div>
            </div>
        </form>
    )
}