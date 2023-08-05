import { useState }from "react"
import {Navigate, Link} from "react-router-dom"
import "./styles.css"

import seePass from '../../assets/eye-line.svg';
import notSeePass from '../../assets/eye-off-line.svg';

export const LoginPage = () =>{
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [usuario, setUser] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        const data = {
            email,
            password
        }
        console.log(data);

        // PETICIÓN
        fetch("https://users-fisi-map-7xx2a7ygfa-tl.a.run.app/api/auth/login", { // http://localhost:3005/api/auth/login
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1YmE5MzEzZmQ3YTdkNGFmYTg0ODg0YWJjYzg0MDMwMDQzNjMxODAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MjUwNTk5MTAxOTUxMTAxMzIzIiwiaGQiOiJ1bm1zbS5lZHUucGUiLCJlbWFpbCI6ImZhdmlvLnNhaWNvQHVubXNtLmVkdS5wZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicDFRLTBhNEEwX1BBcFotZ1BQUUcyZyIsImlhdCI6MTY4Njg3MjQ3NiwiZXhwIjoxNjg2ODc2MDc2LCJqdGkiOiIwYTAxOTM4MWI4M2RjYWEyYzQ3YWEzYTBmYWEzYWYyZGFjMmRmMWIxIn0.O8UJjf8PrwPRlSSeMyAeqhb_FZE-4MtPDalVCutoN_ret4btNxD4ae6PrTHO1LOttH6Amwpm6k9B_9kkeQMY0PcUmUCCTGdj_dehAVj3PqfGr4-ih43oreU3GGzcIDzKQBydS1TRlPSUQm_HdgYas8aXXT2ZgQkl-SstK8OZsZ2eA8pZx5pKWbdFyEN_fsWnwHaeaCRYeMW6fZ8-9fS3z7HHq_fTb8ikA5pE8EP1C0VtioOFLSrHHtT9nnfHg3jMZMVJKjRaLKRjZ-o3uHd-el7f3ZLbPHg2Yg1vvEqFAvkpRzmN480wJ0uhm5mKCsniNTLTrUtcWoiDtbYK9euMMQ'
            })
        })
        .then(response => response.json()) // leemos la api en formato JSON
        .then(data => {
            // console.log(data)
            const mensaje = document.querySelector('.mensajeValidacion');

            if(data.usuario == null ){ // no existe (error en alguno de los campos)

                mensaje.classList.add('error')
                mensaje.textContent = data.msg.toString();
                setUser(false)
            }else{ // existe
                localStorage.setItem('clienteID', JSON.stringify(data.usuario)); // .uid

                mensaje.classList.add('correct')
                mensaje.classList.remove('error')
                mensaje.textContent = data.msg.toString();
                setTimeout(()=>{
                    setUser(true);
                },2000)
            }  
        })
        // setUser(true)
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleChangePass(event) {
        setPassword(event.target.value);
    }

    const wantSeePass = (e) => {
        const pass = document.querySelector('#password')
        if(e.target.classList.contains('see')){
            e.target.src = notSeePass;
            e.target.classList.add('notSee');
            e.target.classList.remove('see');
            pass.type='text'
        }else{
            e.target.src = seePass;
            e.target.classList.add('see');
            e.target.classList.remove('notSee');
            pass.type='password'
        }
    }

    return(
        <>
            <div className="container-2">
                <form className="form" onSubmit={onSubmit}>
                    <h2 className="form__title">Iniciar sesión</h2>
                    <p className="form__paragraph">¿Aún no tiene cuenta? <Link to='/auth/register' className="form__link">Entra aquí</Link></p>
                    
                    <div className="form__container">
                        <div className="form__group">
                            <input type="email" id="usuario" className="form__input" placeholder="Correo" value={email} onChange={handleChange} required/>
                        </div>
                        <div className="form__group form__input_pass">
                            <input type="password" id="password" className="form__input" placeholder="Contraseña" value={password} onChange={handleChangePass}  required/>
                            <div className="btn_pass" onClick={wantSeePass}>
                                <img src={seePass} alt="" className="see"/>
                            </div>
                        </div>
                        <input type="submit" className="form__submit" value="Ingresar"/>
                        {/* <button className="form__submit" onClick={onSubmit}>Ingresar</button> */}
                        <Link  to='/' className="form__link">Continuar como invitado</Link>
                        <div className="mensajeValidacion"></div>
                        {
                            usuario ? (<p>
                                <Navigate to="/"/>
                            </p>) :(
                                <></>
                            )
                        }
                    </div>
                </form>
            </div>
            {/* <section className='shop background'>
                <div className='container d_flex'>
                    <h1>Login</h1>
                </div>
            </section> */}
        </>
    )
}