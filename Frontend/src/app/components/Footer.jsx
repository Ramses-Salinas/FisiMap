
import './footer.css'

export const Footer = () =>{

    return(
        <footer className="footer-container">
            <div className="container-sections">
                <section className='section-data-fisi'>
                    <div className="img-fisi">
                        <img src="../../../assets/fisi-logo.png" alt="" />
                        <img src="../../../assets/UNMSM.png" alt="" />
                    </div>
                    <div className="titles">
                        <h2 className='title-unmsm'>Universidad Nacional Mayor de San Marcos</h2>
                        <h2 className='title-fisi'>Facultad de Ingeniería de Sistemas e Informática</h2>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="data-fisi">
                        <p className="direction">Calle Germán Amézaga s/n - Lima</p>
                        <p className="telefono">Teléfono: 619 - 7000 anexo xxxx</p>
                        <p className="pagina-web">https://sistemas.unmsm.edu.pe</p>
                    </div>
                </section>
                <section className='enlaces-conf'>
                    <div className="conferencias">
                        <h3>CONFERENCIAS</h3>
                        <ul>
                            <li><a href="#">ACM Upcomming Conferences</a></li>
                            <li><a href="#">Computer Science Conferences WASET.ORG</a></li>
                        </ul>
                    </div>
                    <div className="enlaces">
                        <h3>ENLACES DE INTERÉS</h3>
                        <ul>
                            <li><a href="#">Página Web de la UNMSM</a></li>
                            <li><a href="#">Biblioteca Central de la UNMSM</a></li>
                            <li><a href="#">Oficina General de Bienestar Universitario</a></li>
                            <li><a href="#">Sistemas Único de Matrícula</a></li>
                            <li><a href="#">Vicerrectorado de Investigación</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="transparencia">
                        <h3>TRANSPARENCIA</h3>
                        <ul>
                            <li><a href="#">Actas de Consejo de Facultad</a></li>
                            <li><a href="#">Resoluciones Decanales</a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="copyright">
                © Centro de Producción Facultad de Ingeniería de Sistemas e Informática - UNMSM
            </div>
        </footer>
    )
}
