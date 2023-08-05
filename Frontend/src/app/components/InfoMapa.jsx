import { useContext } from 'react';
import './infomapa.css'
import { MapaContext } from '../pages/MapaContext';

export const InfoMapa = ({isView = false, title='',content='',img=''}) =>{
    

    const{ventanaModal,setVentanaModal} = useContext(MapaContext)
    const handleClose = (e) => {
        setVentanaModal({...ventanaModal,isActive:false})
    };

    if(isView == false){
        return null;
    }

    return(
        <div id="modal_container show" className="modal-container">
            <div className="modal">
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
                <img className="modal_img" src={img} alt="imagen-modal" />
                <button id="close" onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    )
}