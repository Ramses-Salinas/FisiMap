import { useContext, useState } from "react";
import { MapaContext } from "../pages/MapaContext";
import searchImg from '../../../assets/search.svg';
import rutaImg from '../../../assets/viaje.svg'
import menuImg from '../../../assets/menu.svg'


export const SearchPlace = () =>{
    const{setVisibleFormRuta, setPiso} = useContext(MapaContext)

    const [searchValue, setSearchValue] = useState('');
    const handleLevel = (e) => {
        setPiso(e.target.value);
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        if(searchValue.trim().length > 2){
            console.log(searchValue);
        }
    }

    function handleChangeSearch(event) {
        setSearchValue(event.target.value);
    }

    const mostrarFormCat = () =>{
        console.log("Seleccionar categoria")
    }
    

    const mostrarFormRuta = (e) =>{
        e.preventDefault()
        setVisibleFormRuta(true)
    }

    return(
        <>
            <div className="container-options">
                <form className="form__group_search" onSubmit={handleSubmitSearch}>
                    <input type="text" className="form__input_search" placeholder="Buscar" value={searchValue} onChange={handleChangeSearch} required/>
                    <div className="btn_search" onClick={handleSubmitSearch} >
                        <img src={searchImg} alt="" className="see"/>
                    </div>
                </form>
                
                <div className="container_btns">
                    <div className="container_level">
                        <select name="levels" className="level-select" onChange={handleLevel}>
                            <option value="1" defaultValue>Piso 1</option>
                            <option value="2">Piso 2</option>
                            <option value="3">Piso 3</option>
                        </select>
                    </div>
                    <div className="container_btn_f">
                    <div className="btn_function" onClick={mostrarFormRuta}>
                        <img src={rutaImg} alt="" />
                        <div>Rutas</div>
                        
                    </div>
                    <div className="btn_function" onClick={mostrarFormCat}>
                        <img src={menuImg} alt="" />
                        <div>Categorías</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}