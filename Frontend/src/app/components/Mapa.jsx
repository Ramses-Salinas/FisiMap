import { useContext, useState } from 'react';
import './mapa.css'

import { MapaPiso } from './MapaPiso';
import { FormRuta } from './FormRuta';
import { InfoMapa } from './InfoMapa';
import { MapaContext } from "../pages/MapaContext"
import { SearchPlace } from './SearchPlace';

export const Mapa = () =>{


    const {ventanaModal,piso} = useContext(MapaContext)

    const {title,content,img,isActive} = ventanaModal;


    // const [piso, setPiso] = useState(1);

    const{visibleFormRuta} = useContext(MapaContext)

    return(
      <>
            <InfoMapa isView={isActive} title={title} content={content} img={img}/>

        <div className="mapa-container">
            {
              visibleFormRuta ? (
                <FormRuta isVisible={visibleFormRuta}/>
              ) : (
                <SearchPlace/>
              )
            }
            <div className="container_map">
              <MapaPiso piso={piso}/>
            </div>
        </div>
      </>
    )
}
