import {Link} from "react-router-dom"
import './header.css'
import fisi_logo from '../../../assets/fisi-logo.png'

export const Header = () =>{

    const user = JSON.parse(localStorage.getItem('clienteID'));
    // console.log(user)

    const cerrarSesion = () =>{
        localStorage.removeItem('clienteID');
    }

    return(
        <div className="header-container">
            <div className="group-logo">
                <img src={fisi_logo} alt="logo-fisi" className='img-logo-fisi'/>
                <h1 className='logo-title'>FISIMap</h1>
            </div>
            {
                (user == null) ? (
                    <div className='btn-group'>
                        <button className='btn'><Link to='/auth/login'>Iniciar Sesión</Link></button>
                        <button className='btn'><Link to='/auth/register'>Registrarse</Link></button>
                    </div>
                ):(
                    <div className='btn-group'>
                        <p className="nameUser">{user.name}</p>
                        <button className='btn' onClick={cerrarSesion}><Link to='/auth/login'>Cerrar Sesión</Link></button>
                        {/* <button className='btn'><Link to='/auth/register'>Registrarse</Link></button> */}
                    </div>
                )
            }
        </div>
    )
}